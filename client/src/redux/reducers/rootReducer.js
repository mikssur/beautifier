import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { categoriesReducer } from './categoriesReducer';


export const rootReducer = combineReducers({
  appReducer,
  categoriesReducer,
});
