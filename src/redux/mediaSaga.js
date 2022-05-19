import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getMediaSuccess } from "./mediaSlice";

function* workGetMediaFetch({ payload }) {
  const result = yield call(
    axios.get,
    `http://itunes.apple.com/search?term=${payload}`
  );
  const albums = yield result.data;
  yield put(getMediaSuccess(albums));
}

function* mediaSaga() {
  yield takeEvery("media/getMediaFetch", workGetMediaFetch);
}

export default mediaSaga;
