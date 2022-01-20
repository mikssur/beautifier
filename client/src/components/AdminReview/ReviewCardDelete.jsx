import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


function ReviewCard({ name, text, isValid, id }) {
  const dispatch = useDispatch()
  const reviewId = id
  const currentURL = window.location.href
  console.log('CURRENT URL V REVIEW CARD', currentURL)
  //const urll = currentURL.split().splice(0, 22)

  console.log('REVIEWID V REVIEWCARD NACHALO', id)
  return (
    <>
      {/* {isValid ? */}
        <li>
          <p>{name}</p>
          <p>{text}</p>
        </li> :
        {/* null} */}
        {/* <Link to={`/adminreview`}> */}
        <button onClick={() => dispatch({ type: 'DELETE_FETCH_REVIEW', payload: { reviewId } })}>Удалить отзыв</button>
        <button onClick={() => dispatch({ type: 'APPROVE_FETCH_REVIEW', payload: { reviewId } })}>Пропустить отзыв</button>
        {/* </Link> */}
    </>
  );
}

export default ReviewCard;
