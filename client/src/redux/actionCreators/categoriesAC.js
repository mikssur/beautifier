import { categoriesAT } from '../actionTypes/categoriesAT'

export const categoriesInitAC = (payload) => {
  return {
    type: categoriesAT.INIT_CATEGORIES,
    payload
  }
}

export const getFetchCategoriesAC = (payload) => {
  return {
    type: categoriesAT.GET_FETCH_CATEGORIES,
    payload
  }
}
