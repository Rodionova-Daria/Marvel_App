import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { setCommics } from '../actions';
import {
  CommicsSagaAction,
  FETCH_COMMICS,
  FETCH_COMMICS_ERROR,
  FETCH_COMMICS_SAGA,
} from '../types/CommicsTypes';
import { getCommics } from '../../commponents/api';

export function* sagaCommicsWatcher(): Generator {
  yield takeEvery(FETCH_COMMICS_SAGA, sagaWorker); // берет каждый
}

function* sagaWorker({ payload }: CommicsSagaAction) {
  try {
    yield put({ type: FETCH_COMMICS });
    const res: AxiosResponse = yield call(getCommics, payload);
    yield put(setCommics(res.data.data.results));
  } catch (err) {
    put({ type: FETCH_COMMICS_ERROR, payload: 'Error in request' });
  }
}
