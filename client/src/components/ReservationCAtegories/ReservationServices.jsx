import React from 'react';
import { useDispatch } from 'react-redux';

import './Reservation.css';

function ReservationServices({ name, id }) {


  const dispatch = useDispatch();

  function getMasters() {
    (async () => {
      const response = await fetch(`http://localhost:3001/mastersreserv/${id}`,)
      const res = await response.json();
      // console.log(res);
      dispatch({
        type: 'INIT_RESERVATION_MASTERS',
        payload: {
          masters: res,
          serviceId: id,
        },
      })
    })();
  }

  return (
    <div>
      <p><a onClick={getMasters}>{name}</a></p>
    </div>
  );
}

export default ReservationServices;
