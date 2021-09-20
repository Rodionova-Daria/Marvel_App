import { combineReducers } from 'redux';
import { comicsReducer } from './reducers/ComicsReducer';
import { heroesReducer } from './reducers/HeroesReducer';

export const rootReducer = combineReducers({
  comics: comicsReducer,
  heroes: heroesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
