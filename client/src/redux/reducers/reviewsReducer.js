import { INIT_REVIEWS } from '../actionTypes/reviewsAT/reviewsAT'

const initialState = { reviews: [] }

export const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_REVIEWS: {

      return { ...state, reviews: action.payload.res }
    }

    default:
      return state;
  }
};

export default reviewsReducer;
