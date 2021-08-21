import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RootState } from './rootReducer';
import * as UserActionCreator from './actions';

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useActions = () => {
  const dispach = useDispatch();
  return bindActionCreators(UserActionCreator, dispach);
};
