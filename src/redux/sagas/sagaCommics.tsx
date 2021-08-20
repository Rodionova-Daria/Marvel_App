import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { fetchCommicsSuccesAction } from '../actions';
import { CommicsSagaAction } from '../types/CommicsActionsTypes';
import { getCommics } from '../../commponents/api';
import { FETCH_COMMICS, FETCH_ERROR, FETCH_COMMICS_SAGA } from '../types/Types';

export function* sagaCommicsWatcher(): Generator {
  yield takeEvery(FETCH_COMMICS_SAGA, sagaWorker);
}

function* sagaWorker({ payload }: CommicsSagaAction) {
  try {
    yield put({ type: FETCH_COMMICS });
    const res: AxiosResponse = yield call(getCommics, payload);
    yield put(fetchCommicsSuccesAction(res.data.data.results));
  } catch (err) {
    put({ type: FETCH_ERROR, payload: 'The request was failed !' });
  }
}
