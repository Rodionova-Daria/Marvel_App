import { IComics } from '../../interfaces/Icomics';
import { FETCH_COMICS, FETCH_COMICS_SUCCESS, FETCH_ERROR } from './Types';

export interface ComicsState {
  comics: IComics[];
  loading: boolean;
  error: null | string;
}

interface FetchComicsAction {
  type: typeof FETCH_COMICS;
}

interface FetchComicsSuccessAction {
  type: typeof FETCH_COMICS_SUCCESS;
  payload: IComics[];
}

export interface ComicsSagaAction {
  type: typeof FETCH_COMICS;
  payload: string;
}

export interface FetchErrorAction {
  type: typeof FETCH_ERROR;
  payload: string;
}

export type ComicsAction = FetchComicsAction | FetchComicsSuccessAction | FetchErrorAction;
