import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import mediaReducer from "./mediaSlice";
import mediaSaga from "./mediaSaga";
import trackReducer from "./trackSlice";

export const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    data: mediaReducer,
    details: trackReducer,
  },
  middleware: [saga],
});
saga.run(mediaSaga);

export default store;
