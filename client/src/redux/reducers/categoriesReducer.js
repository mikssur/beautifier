import { categoriesAT } from '../actionTypes/categoriesAT';

const categoriesInitialState = {
  categories: {}
}

export const categoriesReducer = (state = categoriesInitialState, action) => {

  switch (action.type) {
    case categoriesAT.INIT_CATEGORIES:
      const categories = action.payload
      console.log('INIT CATEGORIES WORK', categories)
      return { ...state, categories: categories };

    default:
      return state
  }

}
