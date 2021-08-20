import { combineReducers } from 'redux';
import { commicsReducer } from './reducers/CommicsReducer';
import { heroesReducer } from './reducers/HeroesReducer';

export const rootReducer = combineReducers({
  commics: commicsReducer,
  heroes: heroesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
