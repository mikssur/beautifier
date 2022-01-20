import React from 'react';
import { useDispatch } from 'react-redux';

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
          <h3>{name}</h3>
          <p>{text}</p>
        
        {/* null} */}
        {/* <Link to={`/adminreview`}> */}
        <button onClick={() => dispatch({ type: 'DELETE_FETCH_REVIEW', payload: { reviewId } })}>Удалить отзыв</button>
        {/* </Link> */}
        </li>
    </>
  );
}

export default ReviewCard;
