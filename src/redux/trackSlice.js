import { createSlice } from "@reduxjs/toolkit";

export const trackSlice = createSlice({
  name: "track",
  initialState: {},
  reducers: {
    getTrackDetails: (state, action) => {
      state.track = action.payload;
    },
    clearTrackDetails: (state) => {
      state.track = null;
    },
  },
});

export const { getTrackDetails, clearTrackDetails } = trackSlice.actions;

export default trackSlice.reducer;
