import { all } from 'redux-saga/effects';
import { sagaCommicsWatcher } from './sagaCommics';
import { sagaHeroesWatcher } from './sagaHeroes';

export function* rootWatcher(): Generator {
  yield all([sagaCommicsWatcher(), sagaHeroesWatcher()]);
}
