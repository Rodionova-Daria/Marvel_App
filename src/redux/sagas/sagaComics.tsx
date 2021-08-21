import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { fetchCommicsSuccesAction } from '../actions';
import { ComicsSagaAction } from '../types/ComicsActionsTypes';
import { getComics } from '../../commponents/api';
import { FETCH_COMICS, FETCH_ERROR, FETCH_COMICS_SAGA } from '../types/Types';

export function* sagaCommicsWatcher(): Generator {
  yield takeEvery(FETCH_COMICS_SAGA, sagaWorker);
}

function* sagaWorker({ payload }: ComicsSagaAction) {
  try {
    yield put({ type: FETCH_COMICS });
    const res: AxiosResponse = yield call(getComics, payload);
    yield put(fetchCommicsSuccesAction(res.data.data.results));
  } catch (err) {
    yield put({ type: FETCH_ERROR, payload: 'The request was failed !' });
  }
}
