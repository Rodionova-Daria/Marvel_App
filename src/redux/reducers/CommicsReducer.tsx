import { CommicsAction, CommicsState } from '../types/CommicsActionsTypes';
import { FETCH_COMMICS, FETCH_ERROR, FETCH_COMMICS_SUCCESS } from '../types/Types';

const initialState: CommicsState = {
  fetchCommics: [],
  loading: false,
  error: null,
};

export const commicsReducer = (state = initialState, action: CommicsAction): CommicsState => {
  switch (action.type) {
    case FETCH_COMMICS:
      return {
        ...state,
        fetchCommics: [],
        loading: true,
        error: null,
      };
    case FETCH_COMMICS_SUCCESS:
      return {
        ...state,
        fetchCommics: [...action.payload],
        loading: false,
        error: null,
      };
    case FETCH_ERROR:
      return {
        ...state,
        fetchCommics: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
