import { CommicsAction, CommicsSagaAction } from './types/CommicsActionsTypes';

import { HeroesAction, HeroesSagaAction } from './types/HeroesActionsTypes';

import { IHero } from '../interfaces/Ihero';
import { ICommics } from '../interfaces/Icommics';
import {
  FETCH_COMMICS_SAGA,
  FETCH_COMMICS_SUCCESS,
  FETCH_HEROES_SAGA,
  FETCH_HEROES_SUCCESS,
  SORT_HEROES,
} from './types/Types';

export function fetchCommicsSaga(id: string): CommicsSagaAction {
  return {
    type: FETCH_COMMICS_SAGA,
    payload: id,
  };
}

export function fetchHeroSaga(search: string): HeroesSagaAction {
  return {
    type: FETCH_HEROES_SAGA,
    payload: search,
  };
}

export function fetchCommicsSuccesAction(payload: ICommics[]): CommicsAction {
  return {
    type: FETCH_COMMICS_SUCCESS,
    payload,
  };
}

export function fetchHeroesSuccessAction(payload: IHero[]): HeroesAction {
  return {
    type: FETCH_HEROES_SUCCESS,
    payload,
  };
}

export function sortHeroes(sortHeroes: IHero[]): HeroesAction {
  return {
    type: SORT_HEROES,
    payload: sortHeroes,
  };
}
