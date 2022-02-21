import { reviewsAT } from '../actionTypes/reviewsAT'

const initialState = { reviews: [] }

export const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case reviewsAT.INIT_REVIEWS: {

      return { ...state, reviews: action.payload.res }
    }

    case reviewsAT.DELETE_REVIEW: {
      const id = action.payload.review.id
      const newReviews = state.reviews.filter((el) => el.id != id )

      return { ...state, reviews: newReviews }
    }

    case reviewsAT.ADD_REVIEW: {
      const review = action.payload.review
      return { ...state, reviews: [...state.reviews, review] }
    }

    case reviewsAT.CHANGE_STATUS_REVIEW: {
      const id = action.payload.review.id

      const changedReviews = state.reviews.map((el) => {
        if(el.id == id) {
          el.isValid = true
          return el
        }
          return el
        })
      
      return { ...state, reviews: changedReviews }
    }

    case reviewsAT.UPDATE_REVIEW: {
      const review = action.payload.review
      console.log('()%%$##@^&*()_()*(*&%$%', review)

      const updatedReviews = state.reviews.map((el) => {
        if(el.id == review.id) {
          el.isValid = true
          el.name = review.name
          el.text = review.text
          return el
        }
          return el
        })
      
      return { ...state, reviews: updatedReviews }
    }

    default:
      return state;
  }
};

export default reviewsReducer;
