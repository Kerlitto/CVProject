import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import DataRenderer from "@/components/DataRenderer";
import ListingFilters from "@/components/ListingFilters";
import ListingList from "@/components/ListingList";
import { Separator } from "@/components/ui";
import { fetchListings } from "@/state/listings/listingsSlice";
import { type AppDispatch, type IRootState } from "@/state/store";

interface DateRange {
  from?: Date;
  to?: Date;
}

export interface Filters {
  dates?: DateRange;
  guests: number;
  search: string;
}

const HomePage = () => {
  const { listings, error, status } = useSelector(
    (state: IRootState) => state.listings
  );
  const dispatch = useDispatch<AppDispatch>();

  const [filters, setFilters] = useState<Filters>({
    dates: undefined,
    guests: 0,
    search: "",
  });

  const fetchOptions = useMemo(() => ({ params: filters }), [filters]);

  useEffect(() => {
    const request = dispatch(fetchListings(fetchOptions));

    return () => {
      request.abort();
    };
  }, [dispatch, fetchOptions]);

  const handleFilters = useCallback((filters: Filters) => {
    setFilters(filters);
  }, []);

  return (
    <div className="container py-4">
      <div className="mb-4">
        <ListingFilters onChange={handleFilters} />
        <Separator className="my-4" />
      </div>
      <DataRenderer error={error} isLoading={status === "loading"}>
        <ListingList listings={listings} />
      </DataRenderer>
    </div>
  );
};

export default HomePage;
