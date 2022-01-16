import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Reservations from '../Reservations/Reservations';

function AdminCabinet(props) {

  const dispatch = useDispatch()
  const { reservations } = useSelector(state => state.reservationReducer)
  const date = Date.now()
  console.log(date);
  useEffect(() => {
    dispatch({ type: 'RESERVATIONS_FETCH' })
  }, [dispatch])
  console.log(reservations);
  return (
    <div>
      <div>Личный кабинет</div>
      <div>
      {reservations.map(reservation => <Reservations key={reservation.id} />)}
      </div>
    </div>
  );
}

export default AdminCabinet;