import { configureStore } from "@reduxjs/toolkit";
import listingsReducer from "./listings/listingsSlice.ts";

export const store = configureStore({
  reducer: { listings: listingsReducer },
});
export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
