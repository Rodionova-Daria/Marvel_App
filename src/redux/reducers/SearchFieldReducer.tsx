import { SEARCHFIELD, SearchFieldAction, SearchFieldState } from '../types/SearchTypes';

const initialState: SearchFieldState = {
  serchField: '',
};

export const searchReducer = (
  state = initialState,
  action: SearchFieldAction
): SearchFieldState => {
  switch (action.type) {
    case SEARCHFIELD:
      console.log('search');
      return {
        serchField: action.payload,
      };
    default:
      return state;
  }
};
