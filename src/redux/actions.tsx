import {
  CommicsAction,
  FETCH_COMMICS_SUCCESS,
  FETCH_COMMICS_SAGA,
  CommicsSagaAction,
} from './types/CommicsTypes';

import {
  FETCH_HEROES_SAGA,
  FETCH_HEROES_SUCCESS,
  HeroesAction,
  HeroesSagaAction,
  HEROES_PER_PAGE,
  SORT_HEROES,
} from './types/HeroesTypes';

import { SEARCHFIELD, SearchFieldAction } from './types/SearchTypes';
import { IHero } from '../interfaces/Ihero';
import { ICommics } from '../interfaces/Icommics';

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

export function setCommics(payload: ICommics[]): CommicsAction {
  return {
    type: FETCH_COMMICS_SUCCESS,
    payload,
  };
}

export function setHeroes(payload: IHero[]): HeroesAction {
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

export function searchValue(search: string): SearchFieldAction {
  return {
    type: SEARCHFIELD,
    payload: search,
  };
}

export function heroesPerPage(heroesNumber: number): HeroesAction {
  return {
    type: HEROES_PER_PAGE,
    payload: heroesNumber,
  };
}
