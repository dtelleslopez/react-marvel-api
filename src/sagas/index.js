import { takeEvery, call, put } from 'redux-saga/effects';
import * as Api from '../api';
import {
  CHARACTERS_FETCH_REQUESTED,
  CHARACTERS_FETCH_SUCCEEDED,
  CHARACTERS_FETCH_FAILED,
} from '../constants/action-types';

function* fetchCharacters() {
  try {
    const characters = yield call(Api.fetchCharacters);
    yield put({ type: CHARACTERS_FETCH_SUCCEEDED, payload: characters });
  } catch (e) {
    yield put({ type: CHARACTERS_FETCH_FAILED, message: e.message });
  }
}

export default function* watcherSaga() {
  yield takeEvery(CHARACTERS_FETCH_REQUESTED, fetchCharacters);
}
