import { createSlice } from "@reduxjs/toolkit";

export const mediaSlice = createSlice({
  name: "media",
  initialState: {
    media: [],
    isLoading: false,
  },
  reducers: {
    getMediaFetch: (state) => {
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
      console.log(tracks);
      state.isLoading = false;
    },
    getMediaFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getMediaFetch, getMediaSuccess, getMediaFailure } =
  mediaSlice.actions;

export default mediaSlice.reducer;
