import { createSlice } from "@reduxjs/toolkit";

export const allMediaSlice = createSlice({
  name: "allMedia",
  initialState: {
    media: [],
    isLoading: false,
  },
  reducers: {
    getMediaFetch: (state, _) => {
      state.isLoading = true;
    },
    getMediaSuccess: (state, action) => {
      const media = action.payload.results;
      const tracks = media.map((el) => ({
        artistName: el.artistName,
        artworkUrl100: el.artworkUrl100,
        description: el.longDescription || el.description,
        kind: el.kind,
        trackName: el.trackName,
        trackPrice: el.trackPrice,
        trackTimeMillis: el.trackTimeMillis,
        releaseDate: el.releaseDate,
        wrapperType: el.wrapperType,
      }));
      state.media = tracks;
      state.isLoading = false;
    },
    getMediaFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getMediaFetch, getMediaSuccess, getMediaFailure } =
  allMediaSlice.actions;

export default allMediaSlice.reducer;
