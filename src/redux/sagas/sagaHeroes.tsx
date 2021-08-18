import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { setHeroes } from '../actions';
import {
  FETCH_HEROES,
  FETCH_HEROES_ERROR,
  FETCH_HEROES_SAGA,
  HeroesSagaAction,
} from '../types/HeroesTypes';
import { getHeroes } from '../../commponents/api';

export function* sagaHeroesWatcher(): Generator {
  yield takeEvery(FETCH_HEROES_SAGA, sagaWorker); // берет каждый
}

function* sagaWorker({ payload }: HeroesSagaAction) {
  try {
    yield put({ type: FETCH_HEROES });
    const res: AxiosResponse = yield call(getHeroes, payload);
    yield put(setHeroes(res.data.data.results));
  } catch (err) {
    put({ type: FETCH_HEROES_ERROR, payload: 'Error in request' });
  }
}
