import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { masterReducer } from './masterReducer';


export const rootReducer = combineReducers({
  appReducer,
  masterReducer
});
