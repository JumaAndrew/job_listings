import { createSlice, configureStore } from '@reduxjs/toolkit';
import listingData from '../assets/data.json';

const listingsInitialState = listingData;

const listingSlice = createSlice({
  name: 'listings',
  initialState: listingsInitialState,
  reducers: {},
});

const store = configureStore({
  reducer: {
    listings: listingSlice.reducer,
  },
});

export default store;
