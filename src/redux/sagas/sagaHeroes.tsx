import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { fetchHeroesSuccessAction } from '../actions';
import { HeroesSagaAction } from '../types/HeroesActionsTypes';
import { getHeroes } from '../../commponents/api';
import { FETCH_HEROES, FETCH_ERROR, FETCH_HEROES_SAGA } from '../types/Types';

export function* sagaHeroesWatcher(): Generator {
  yield takeEvery(FETCH_HEROES_SAGA, sagaWorker);
}

function* sagaWorker({ payload }: HeroesSagaAction) {
  try {
    yield put({ type: FETCH_HEROES });
    const res: AxiosResponse = yield call(getHeroes, payload);
    yield put(fetchHeroesSuccessAction(res.data.data.results));
  } catch (err) {
    yield put({ type: FETCH_ERROR, payload: 'Error in request' });
  }
}
