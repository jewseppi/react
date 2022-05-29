import { createSlice } from "@reduxjs/toolkit";
import { startOfQuarter } from "date-fns";
import { filterBySearch } from "../utils/filterBySearch";

export const allMediaSlice = createSlice({
  name: "allMedia",
  initialState: {
    media: [],
    isLoading: false,
    search: [],
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
    updateSearchFilter: (state, { payload }) => {
      state.searchValue = payload;
      state.media = filterBySearch(state.media, payload).filter(
        (el) => el.wrapperType === "track"
      );
    },
  },
});

export const {
  getMediaFetch,
  getMediaSuccess,
  getMediaFailure,
  updateSearchFilter,
} = allMediaSlice.actions;

export default allMediaSlice.reducer;
