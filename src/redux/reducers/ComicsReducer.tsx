import { ComicsAction, ComicsState } from '../types/ComicsActionsTypes';
import { FETCH_COMICS, FETCH_ERROR, FETCH_COMICS_SUCCESS } from '../types/Types';

const initialState: ComicsState = {
  comics: [],
  loading: false,
  error: null,
};

export const comicsReducer = (state = initialState, action: ComicsAction): ComicsState => {
  switch (action.type) {
    case FETCH_COMICS:
      return {
        ...state,
        comics: [],
        loading: true,
        error: null,
      };
    case FETCH_COMICS_SUCCESS:
      return {
        ...state,
        comics: [...action.payload],
        loading: false,
        error: null,
      };
    case FETCH_ERROR:
      return {
        ...state,
        comics: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
