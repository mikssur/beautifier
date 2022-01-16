import { combineReducers } from 'redux';
import { appReducer } from './appReducer';

import { categoriesReducer } from './categoriesReducer';

import { portfolioReducer } from './portfolioReducer';
// import { categoriesReducer } from './categoriesReducer';
import reviewsReducer from './reviewsReducer';
import servicesReducer from './servicesReducer';
import mastersReducer from './mastersReducer';



export const rootReducer = combineReducers({

  appReducer, reviewsReducer,
  portfolioReducer, categoriesReducer, servicesReducer, mastersReducer,

  // categoriesReducer,

});
