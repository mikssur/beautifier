import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdminReservations from '../AdminReservations/AdminReservations';
import { Link } from 'react-router-dom';

function AdminCabinet(props) {

  const dispatch = useDispatch()
  const { reservations } = useSelector(state => state.reservationReducer)
  const date = Date.now()
  console.log(date);
  useEffect(() => {
    dispatch({ type: 'ADMIN_RESERVATIONS_FETCH' })
  }, [dispatch])
  // console.log(reservations);
  return (
    <div>
      <Link to="/admincabinet">Личный кабинет</Link>
      <Link to="/adminreview">Отзывы</Link>
      <Link to="/adminmasters">Мастера</Link>
      <Link to="/adminchangepass">Изменить пароль</Link>


      {/* <Link to="/adminmasters">Мастера</Link> */}
      <div>
        {reservations.map(reservation => <AdminReservations key={reservation.id} id={reservation.id} />)}
      </div>
    </div>
  );
}

export default AdminCabinet;
