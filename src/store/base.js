import { createSlice, configureStore } from '@reduxjs/toolkit';
import listingData from '../assets/data.json';

const listingsInitialState = {
  listingData,
  filteredData: [],
};

const listingSlice = createSlice({
  name: 'listings',
  initialState: listingsInitialState,
  reducers: {
    filter(state, action) {
      state.filteredData = [];

      action.payload.forEach((skill) => {
        listingData.forEach((listing) => {
          if (
            listing.languages.includes(skill) ||
            listing.tools.includes(skill)
          ) {
            state.filteredData.push(listing);
          }
        });
      });

      state.listingData = state.filteredData;
    },
    restore(state) {
      state.listingData = listingData;
    },
  },
});

const store = configureStore({
  reducer: {
    listings: listingSlice.reducer,
  },
});

export const listingsActions = listingSlice.actions;
export default store;
