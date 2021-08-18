export interface SearchFieldState {
  serchField: string;
}

export const SEARCHFIELD = 'SEARCHFIELD';

export interface SearchFieldAction {
  type: typeof SEARCHFIELD;
  payload: string;
}
