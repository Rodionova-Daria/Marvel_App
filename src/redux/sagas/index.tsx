import { all } from 'redux-saga/effects';
import { sagaCommicsWatcher } from './sagaComics';
import { sagaHeroesWatcher } from './sagaHeroes';

export function* rootWatcher(): Generator {
  yield all([sagaCommicsWatcher(), sagaHeroesWatcher()]);
}
