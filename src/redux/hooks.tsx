import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RootState } from './rootReducer';
import * as MarvelActionCreator from './actions';

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useActions = () => {
  const dispach = useDispatch();
  return bindActionCreators(MarvelActionCreator, dispach);
};
