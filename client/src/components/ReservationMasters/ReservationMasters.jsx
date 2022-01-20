import React from 'react';
// import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


function ReservationMasters({ name, id }) {
  const dispatch = useDispatch();

function addMasterId () {
dispatch({
  type: 'ADD_RESERVATION_MASTER',
  payload: id,
})
}

  return (
    <div>
      <p><a onClick={addMasterId}>{name}</a></p>
    </div>
  );
}

export default ReservationMasters;
