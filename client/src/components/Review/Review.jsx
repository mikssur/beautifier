import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { initReviewsAC } from '../../redux/actionCreators/reviewsAC/reviewsAC';
import ReviewCard from './ReviewCard';


function Review(props) {


  const dispatch = useDispatch()

  const { reviews } = useSelector(state => state.reviewsReducer)

  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:5000/`)
      const res = await response.json();

      dispatch(initReviewsAC({ res }))

    })();
  }, [])

  return (
    <div>
      <ul>
        {reviews.map(review => <ReviewCard key={review.id} name={review.name} text={review.text} isValid={review.isValid} />)}
      </ul>
      <button>Оставить отзыв</button>
    </div>

  );
}

export default Review;
