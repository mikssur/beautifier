import { combineReducers } from 'redux';
import { appReducer } from './appReducer';

import { categoriesReducer } from './categoriesReducer';

import { portfolioReducer } from './portfolioReducer';
import { portfolioCReducer } from './portfolioCReducer';
// import { categoriesReducer } from './categoriesReducer';
import reviewsReducer from './reviewsReducer';
import servicesReducer from './servicesReducer';
import mastersReducer from './mastersReducer';

import reservationReducer from './reservationReducer'
import { reservationCategoriesReducer } from './reservationCategoriesReducer';

export const rootReducer = combineReducers({
  appReducer, reviewsReducer,
  portfolioReducer, categoriesReducer, reservationReducer, portfolioCReducer, servicesReducer, mastersReducer, reservationCategoriesReducer
  // categoriesReducer,
});
