import { combineReducers } from 'redux';
import { appReducer } from './appReducer';

import { categoriesReducer } from './categoriesReducer';

import { portfolioReducer } from './portfolioReducer';
// import { categoriesReducer } from './categoriesReducer';
import reviewsReducer from './reviewsReducer';



export const rootReducer = combineReducers({

  appReducer, reviewsReducer,
  portfolioReducer, categoriesReducer

  // categoriesReducer,

});
