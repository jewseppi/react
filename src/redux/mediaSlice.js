import { createSlice } from "@reduxjs/toolkit";

export const mediaSlice = createSlice({
  name: "media",
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

export const { getTrackDetails, clearTrackDetails } = mediaSlice.actions;

export default mediaSlice.reducer;
