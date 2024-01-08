import { configureStore } from "@reduxjs/toolkit";
import listingReducer from "../features/listings/listingSlice";

const store = configureStore({
  reducer: {
    listings: listingReducer,
  },
});

export default store;
