import { ComicsAction, ComicsState } from '../types/ComicsActionsTypes';
import { FETCH_COMICS, FETCH_ERROR, FETCH_COMICS_SUCCESS } from '../types/Types';

const initialState: ComicsState = {
  fetchComics: [],
  loading: false,
  error: null,
};

export const comicsReducer = (state = initialState, action: ComicsAction): ComicsState => {
  switch (action.type) {
    case FETCH_COMICS:
      return {
        ...state,
        fetchComics: [],
        loading: true,
        error: null,
      };
    case FETCH_COMICS_SUCCESS:
      return {
        ...state,
        fetchComics: [...action.payload],
        loading: false,
        error: null,
      };
    case FETCH_ERROR:
      return {
        ...state,
        fetchComics: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
