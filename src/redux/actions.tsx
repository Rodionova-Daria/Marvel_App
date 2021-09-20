import { ComicsAction, ComicsSagaAction } from './types/ComicsActionsTypes';

import { HeroesAction, HeroesSagaAction } from './types/HeroesActionsTypes';

import { IHero } from '../interfaces/Ihero';
import { IComics } from '../interfaces/Icomics';
import {
  FETCH_COMICS,
  FETCH_COMICS_SUCCESS,
  FETCH_HEROES,
  FETCH_HEROES_SUCCESS,
  SORT_HEROES,
} from './types/Types';

export function fetchCommics(id: string): ComicsSagaAction {
  return {
    type: FETCH_COMICS,
    payload: id,
  };
}

export function fetchHero(
  offset: number,
  limit: number,
  name: string | string[] | null
): HeroesSagaAction {
  return {
    type: FETCH_HEROES,
    payload: {
      offset,
      limit,
      name,
    },
  };
}

export function fetchCommicsSuccesAction(payload: IComics[]): ComicsAction {
  return {
    type: FETCH_COMICS_SUCCESS,
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
