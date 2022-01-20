import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdminReservations from '../AdminReservations/AdminReservations';
import { Link } from 'react-router-dom';

import './AdminCabinet.css';

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
    <div className="admin-panel">
      <h2>Записи</h2>
      <div className="admin-menu">
        <Link to="/admincabinet">Личный кабинет</Link>
        <Link to="/adminreview">Отзывы</Link>
        <Link to="/adminmasters">Мастера</Link>
        <Link to="/adminchangepass">Изменить пароль</Link>
      </div>

      {/* <Link to="/adminmasters">Мастера</Link> */}
      <div className="reservation-admin-block">
        {reservations.map(reservation => <AdminReservations key={reservation.id} id={reservation.id} />)}
      </div>
    </div>
  );
}

export default AdminCabinet;
