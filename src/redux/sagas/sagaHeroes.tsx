import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { fetchHeroesSuccessAction } from '../actions';
import { HeroesSagaAction } from '../types/HeroesActionsTypes';
import { getHeroes } from '../../commponents/api';
import { FETCH_HEROES, FETCH_ERROR } from '../types/Types';

export function* sagaHeroesWatcher(): Generator {
  yield takeEvery(FETCH_HEROES, sagaWorker);
}

function* sagaWorker({ payload }: HeroesSagaAction) {
  try {
    const res: AxiosResponse = yield call(getHeroes, payload.offset, payload.limit, payload.name);
    yield put(fetchHeroesSuccessAction(res.data.data.results));
  } catch (err) {
    yield put({ type: FETCH_ERROR, payload: 'Error in request' });
  }
}
