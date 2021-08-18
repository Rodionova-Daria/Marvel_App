import { IHero } from '../../interfaces/Ihero';

const FETCH_HEROES = 'FETCH_HEROES';
const FETCH_HEROES_SUCCESS = 'FETCH_HEROES_SUCCESS';
const FETCH_HEROES_ERROR = 'FETCH_HEROES_ERROR';
const FETCH_HEROES_SAGA = 'FETCH_HEROES_SAGA';
const SORT_HEROES = 'SORT_HEROES';
const HEROES_PER_PAGE = 'HERO_PER_PAGE';

interface HeroesState {
  fetchHeroes: IHero[];
  loading: boolean;
  error: null | string;
  heroesPerPage: number;
}

interface HeroesPerPageAction {
  type: typeof HEROES_PER_PAGE;
  payload: number;
}

interface FetchHeroesAction {
  type: typeof FETCH_HEROES;
}

interface FetchHeroesSuccessAction {
  type: typeof FETCH_HEROES_SUCCESS;
  payload: IHero[];
}

interface FetchHeroesErrorAction {
  type: typeof FETCH_HEROES_ERROR;
  payload: string;
}

interface SortHeroesAction {
  type: typeof SORT_HEROES;
  payload: IHero[];
}

export interface HeroesSagaAction {
  type: typeof FETCH_HEROES_SAGA;
  payload: string;
}

type HeroesAction =
  | FetchHeroesAction
  | FetchHeroesSuccessAction
  | FetchHeroesErrorAction
  | SortHeroesAction
  | HeroesPerPageAction;

export type { HeroesState, HeroesAction };
export {
  FETCH_HEROES,
  FETCH_HEROES_SUCCESS,
  FETCH_HEROES_ERROR,
  FETCH_HEROES_SAGA,
  SORT_HEROES,
  HEROES_PER_PAGE,
};
