import { ICommics } from '../../interfaces/Icommics';
import { FETCH_COMMICS, FETCH_COMMICS_SAGA, FETCH_COMMICS_SUCCESS, FETCH_ERROR } from './Types';

export interface CommicsState {
  fetchCommics: ICommics[];
  loading: boolean;
  error: null | string;
}

interface FetchCommicsAction {
  type: typeof FETCH_COMMICS;
}

interface FetchCommicsSuccessAction {
  type: typeof FETCH_COMMICS_SUCCESS;
  payload: ICommics[];
}

export interface CommicsSagaAction {
  type: typeof FETCH_COMMICS_SAGA;
  payload: string;
}

export interface FetchErrorAction {
  type: typeof FETCH_ERROR;
  payload: string;
}

export type CommicsAction = FetchCommicsAction | FetchCommicsSuccessAction | FetchErrorAction;
