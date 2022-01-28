import { reviewsAT } from '../actionTypes/reviewsAT'


export const initReviewsAC = (payload) => {
  return {
    type: reviewsAT.INIT_REVIEWS,
    payload
  }
}

