import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { initReviewsAC } from '../../redux/actionCreators/reviewsAC/reviewsAC';
import AddReviewForm from './AddReviewForm';
import ReviewCard from './ReviewCard';


function Review(props) {

  // const [newReview, setNewReview] = useState(false);
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

  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(`/reviews`)
  //     const res = await response.json();
  //     dispatch(initReviewsAC({ res }))
  //   })();
  // }, [newReview])

  return (
    <>
      <ul>
        {newReviews.map(review => <ReviewCard key={review.id} name={review.name} text={review.text} id={review.id} isValid={review.isValid} />)}
      </ul>
      <AddReviewForm />
      {/* {newReview ? <AddReviewForm setNewReview={setNewReview} /> : <button onClick={() => setNewReview(true)}>Оставить отзыв</button>} */}
    </>

  );
}

export default Review;
