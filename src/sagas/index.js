import { takeEvery, call, put } from 'redux-saga/effects';
import * as Api from '../api';
import {
  CHARACTERS_FETCH_REQUESTED,
  CHARACTERS_FETCH_SUCCEEDED,
  CHARACTERS_FETCH_FAILED,
  MORE_CHARACTERS_FETCH_REQUESTED,
  MORE_CHARACTERS_FETCH_SUCCEEDED,
  MORE_CHARACTERS_FETCH_FAILED,
} from '../constants/action-types';

function* fetchCharacters({ payload }) {
  try {
    const { characters } = yield call(Api.fetchCharacters, payload);

    yield put({ type: CHARACTERS_FETCH_SUCCEEDED, payload: { characters } });
  } catch (e) {
    yield put({ type: CHARACTERS_FETCH_FAILED, message: e.message });
  }
}

function* fetchMoreCharacters({ payload }) {
  try {
    const { pagination } = payload;
    const { total, characters } = yield call(Api.fetchCharacters, { pagination });

    yield put({
      type: MORE_CHARACTERS_FETCH_SUCCEEDED,
      payload: {
        characters,
        pagination: {
          ...pagination,
          page: pagination.page + 1,
          total,
        },
      },
    });
  } catch (e) {
    yield put({ type: MORE_CHARACTERS_FETCH_FAILED, message: e.message });
  }
}

export default function* watcherSaga() {
  yield takeEvery(CHARACTERS_FETCH_REQUESTED, fetchCharacters);
  yield takeEvery(MORE_CHARACTERS_FETCH_REQUESTED, fetchMoreCharacters);
}
