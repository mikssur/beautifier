import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { portfolioReducer } from './portfolioReducer';
import { portfolioCReducer } from './portfolioCReducer';
// import { categoriesReducer } from './categoriesReducer';



export const rootReducer = combineReducers({
  appReducer,
  portfolioReducer,
  portfolioCReducer
  // categoriesReducer,

});
