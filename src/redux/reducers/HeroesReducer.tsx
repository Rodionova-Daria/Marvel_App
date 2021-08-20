import { HeroesAction, HeroesState } from '../types/HeroesActionsTypes';
import { FETCH_ERROR, FETCH_HEROES, FETCH_HEROES_SUCCESS, SORT_HEROES } from '../types/Types';

const initialState: HeroesState = {
  fetchHeroes: [],
  loading: false,
  error: null,
  heroesPerPage: 4,
};

export const heroesReducer = (state = initialState, action: HeroesAction): HeroesState => {
  switch (action.type) {
    case FETCH_HEROES:
      return {
        ...state,
        fetchHeroes: [],
        loading: true,
        error: null,
      };
    case FETCH_HEROES_SUCCESS:
      return {
        ...state,
        fetchHeroes: [...action.payload],
        loading: false,
        error: null,
      };
    case FETCH_ERROR:
      return {
        ...state,
        fetchHeroes: [],
        loading: false,
        error: action.payload,
      };
    case SORT_HEROES:
      return {
        ...state,
        fetchHeroes: [...action.payload],
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
