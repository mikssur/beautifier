import React from 'react';
import { useDispatch } from 'react-redux';


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
      <span onClick={getMasters}>{name}</span>
    </div>
  );
}

export default ReservationServices;
