import { combineReducers } from 'redux';
import { commicsReducer } from './reducers/CommicsReducer';
import { heroesReducer } from './reducers/HeroesReducer';
import { searchReducer } from './reducers/SearchFieldReducer';

export const rootReducer = combineReducers({
  commics: commicsReducer,
  heroes: heroesReducer,
  searchField: searchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
