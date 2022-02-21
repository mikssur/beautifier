import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { initReviewsAC } from '../../redux/actionCreators/reviewsAC';
import AddReviewForm from './AddReviewForm';
import ReviewCard from './ReviewCard';

import './Review.css';


function Review(props) {

  const [newDate, setNewDate] = useState('')

  const dispatch = useDispatch()
  const { reviews } = useSelector(state => state.reviewsReducer)
  const newReviews = reviews.filter((el) => el.isValid !== false)


  useEffect(() => {
    (async () => {
      const response = await fetch(`/reviews`)
      const res = await response.json();
      dispatch(initReviewsAC({ res }))
    })();
  }, [dispatch])

  return (
    <div className="review-block">
      <h2>Отзывы</h2>
      <div className="review-body">
        {newReviews.map(review => <ReviewCard key={review.id} name={review.name} text={review.text} id={review.id} isValid={review.isValid} />)}
      </div>
      <AddReviewForm />
    </div>
  );
}

export default Review;
