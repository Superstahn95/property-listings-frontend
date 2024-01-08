import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listings: [],
};

export const listingSlice = createSlice({
  name: "listings",
  initialState,
  reducers: {
    getListingsSuccess: (state, action) => {
      state.listings = action.payload;
    },
    addListingSucess: (state, action) => {
      state.listings = [...state.listings, action.payload];
    },
  },
});
export const filterListingsByRooms = (listings, rooms) => {
  return listings.filter((listing) => listing.rooms === rooms);
};

export const { addListingSucess, getListingsSuccess } = listingSlice.actions;
export default listingSlice.reducer;
