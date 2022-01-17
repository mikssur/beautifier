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
      <span onClick={addMasterId}>{name}</span>
    </div>
  );
}

export default ReservationMasters;
