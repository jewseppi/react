import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import allMediaReducer from "./allMediaSlice";
import mediaSaga from "./mediaSaga";
import mediaReducer from "./mediaSlice";

export const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    allMedia: allMediaReducer,
    media: mediaReducer,
  },
  middleware: [saga],
});
saga.run(mediaSaga);

export default store;
