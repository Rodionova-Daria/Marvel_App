import {
  HeroesAction,
  HeroesState,
  FETCH_HEROES,
  FETCH_HEROES_ERROR,
  FETCH_HEROES_SUCCESS,
  SORT_HEROES,
  HEROES_PER_PAGE,
} from '../types/HeroesTypes';

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
    case FETCH_HEROES_ERROR:
      return {
        ...state,
        fetchHeroes: [],
        loading: true,
        error: action.payload,
      };
    case SORT_HEROES:
      return {
        ...state,
        fetchHeroes: [...action.payload],
        loading: false,
        error: null,
      };
    case HEROES_PER_PAGE:
      return {
        ...state,
        heroesPerPage: action.payload,
      };
    default:
      return state;
  }
};
