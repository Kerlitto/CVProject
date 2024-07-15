import axios from "axios";
import { useEffect, useMemo, useRef, useState } from "react";

import api from "@/api";
import { getItem, setItem } from "@/lib/utils/localStorage";

interface CachedData<T> {
  lastFetched: number;
  data: T;
}

const STALE_TIME = 5 * 60 * 1000; // 5 minutes

const useFetch = <ReturnData>(url: string, options?: Record<string, null>) => {
  const [data, setData] = useState<ReturnData>();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const abortControllerRef = useRef<AbortController | null>(null);

  const storageKey = useMemo(() => {
    if (!options?.params) {
      return url;
    }

    return url + "?" + JSON.stringify(options.params);
  }, [options, url]);

  useEffect(() => {
    const fetchData = async () => {
      const currentTime = new Date().getTime();
      const cachedData: CachedData<ReturnData> = getItem(storageKey);

      if (cachedData && currentTime - cachedData.lastFetched < STALE_TIME) {
        setData(cachedData.data);
        setIsLoading(false);
        return;
      }

      abortControllerRef.current = new AbortController();

      setError(null);
      setIsLoading(true);

      try {
        const response = await api.get(url, {
          ...options,
          signal: abortControllerRef.current?.signal,
        });
        setData(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          return;
        }

        setError("Something went wrong. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      abortControllerRef.current?.abort();
    };
  }, [options, storageKey, url]);

  useEffect(() => {
    if (!data) return;

    setItem(storageKey, {
      lastFetched: new Date().getTime(),
      data,
    });
  }, [data, storageKey]);

  return { data, error, isLoading };
};

export default useFetch;
