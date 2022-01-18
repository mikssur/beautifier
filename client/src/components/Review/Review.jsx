import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { initReviewsAC } from '../../redux/actionCreators/reviewsAC/reviewsAC';
import AddReviewForm from './AddReviewForm';
import ReviewCard from './ReviewCard';

import './Review.css';


function Review(props) {

  const [newReview, setNewReview] = useState(false);
  const [newDate, setNewDate] = useState('')

  const dispatch = useDispatch()
  const { reviews } = useSelector(state => state.reviewsReducer)

  useEffect(() => {
    (async () => {
      const response = await fetch(`/reviews`)
      const res = await response.json();
      dispatch(initReviewsAC({ res }))
    })();
  }, [])

  return (
    <>
      <div className="review-body">
        {reviews.map(review => <ReviewCard key={review.id} name={review.name} text={review.text} isValid={review.isValid} />)}
      </div>
      {newReview ? <AddReviewForm setNewReview={setNewReview} /> : <button onClick={() => setNewReview(true)}>Оставить отзыв</button>}
    </>
  );
}

export default Review;
