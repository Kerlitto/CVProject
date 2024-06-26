import { configureStore } from "@reduxjs/toolkit";
import listingsReducer from "./listings/listingsSlice.ts";

export const store = configureStore({
  reducer: { listings: listingsReducer },
});

export default store;
