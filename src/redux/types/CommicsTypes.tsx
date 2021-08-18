import { ICommics } from '../../interfaces/Icommics';

const FETCH_COMMICS = 'FETCH_COMMICS';
const FETCH_COMMICS_SUCCESS = 'FETCH_COMMICS_SUCCESS';
const FETCH_COMMICS_ERROR = 'FETCH_COMMICS_ERROR';
const FETCH_COMMICS_SAGA = 'FETCH_COMMICS_SAGA';

interface CommicsState {
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

interface FetchCommicsErrorAction {
  type: typeof FETCH_COMMICS_ERROR;
  payload: string;
}

type CommicsAction = FetchCommicsAction | FetchCommicsSuccessAction | FetchCommicsErrorAction;

export type { CommicsState, CommicsAction };
export { FETCH_COMMICS, FETCH_COMMICS_SUCCESS, FETCH_COMMICS_ERROR, FETCH_COMMICS_SAGA };
