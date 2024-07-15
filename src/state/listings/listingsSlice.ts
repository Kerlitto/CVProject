import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import api from "@/api";
import { type ListingDetails } from "@/api/data/listings";
import { AxiosRequestConfig } from "axios";

interface ListingSliceState {
  listings: ListingDetails[];
  error: string | undefined | null;
  favoriteListingIds: number[];
  status: "failed" | "succeeded" | "loading" | "idle";
}

const initialState: ListingSliceState = {
  listings: [],
  error: null,
  favoriteListingIds: [],
  status: "idle",
};

export const listingsSlice = createSlice({
  name: "listings",
  initialState,
  reducers: {
    addFavoriteListing: (state, action) => {
      state.favoriteListingIds.push(action.payload);
    },
    removeFavoriteListing: (state, action) => {
      state.favoriteListingIds = state.favoriteListingIds.filter(
        id => id !== action.payload
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchListings.pending, state => {
        state.status = "loading";
      })
      .addCase(fetchListings.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.listings = action.payload;
      })
      .addCase(fetchListings.rejected, (state, action) => {
        const message = action.error.message;

        if (message !== "Aborted") {
          state.status = "failed";
          state.error = message;
        }
      });
  },
});

export const fetchListings = createAsyncThunk(
  "listings/fetchListings",
  async (options: AxiosRequestConfig) => {
    const response = await api.get("/api/listings", options);
    return response.data;
  }
);

export const { addFavoriteListing, removeFavoriteListing } =
  listingsSlice.actions;

export default listingsSlice.reducer;
