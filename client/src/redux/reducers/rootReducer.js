import { combineReducers } from 'redux';
import { appReducer } from './appReducer';

import { categoriesReducer } from './categoriesReducer';

import { portfolioReducer } from './portfolioReducer';
import { portfolioCReducer } from './portfolioCReducer';
// import { categoriesReducer } from './categoriesReducer';
import reviewsReducer from './reviewsReducer';

import reservationReducer from './reservationReducer'

export const rootReducer = combineReducers({
  appReducer, reviewsReducer,
  portfolioReducer, categoriesReducer, reservationReducer, portfolioCReducer
  // categoriesReducer,
});
