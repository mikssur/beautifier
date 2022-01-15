import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Reservations from '../Reservations/Reservations';

function AdminCabinet(props) {

  const dispatch = useDispatch()
  const { reservations } = useSelector(state => state.reservationReducer)

  // useEffect(() => {
  //   dispatch({ type: 'RESERVATIONS_FETCH' })
  //   console.log(456);
  // }, [dispatch])

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