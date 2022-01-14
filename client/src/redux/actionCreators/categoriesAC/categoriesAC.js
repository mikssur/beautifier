//import { servicesAT } from '../actionTypes/servicesAT'
import { categoriesAT } from '../actionTypes/categoriesAT'

export const categoriesInitAC = (payload) => {
  return {
    type: categoriesAT.INIT_CATEGORIES,
    payload
  }
}
// export const fetchServicesAC = (payload) => {
//   return {
//     type: servicesAT.GET_FETCH_SERVICES,
//     payload
//   }
// }
// export const fetchChooseCategoryAC = (payload) => {
//   return {
//     type: categoriesAT.GET_FETCH_CHOOSE_CATEGORY,
//     payload
//   }
// }
