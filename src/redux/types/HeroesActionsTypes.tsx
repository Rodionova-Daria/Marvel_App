import { IHero } from '../../interfaces/Ihero';
import { FetchErrorAction } from './ComicsActionsTypes';
import { FETCH_HEROES, FETCH_HEROES_SAGA, FETCH_HEROES_SUCCESS, SORT_HEROES } from './Types';

export interface HeroesState {
  heroes: IHero[];
  loading: boolean;
  error: null | string;
  heroesPerPage: number;
}

interface FetchHeroesAction {
  type: typeof FETCH_HEROES;
}

interface FetchHeroesSuccessAction {
  type: typeof FETCH_HEROES_SUCCESS;
  payload: IHero[];
}

interface SortHeroesAction {
  type: typeof SORT_HEROES;
  payload: IHero[];
}

export interface HeroesSagaAction {
  type: typeof FETCH_HEROES;
  payload: {
    offset: number;
    limit: number;
    name?: string;
  };
}

export type HeroesAction =
  | FetchHeroesAction
  | FetchHeroesSuccessAction
  | FetchErrorAction
  | SortHeroesAction;
