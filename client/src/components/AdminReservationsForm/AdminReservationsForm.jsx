import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function AdminReservationsForm({id}) {
  const dispatch = useDispatch()
  const { reservations } = useSelector(state => state.reservationReducer)
  const rightReservation = reservations.find(el => el.id === id)
  return (
    <div key={rightReservation.clientName}>
    Имя: <div>{rightReservation.clientName}</div>
    Номер телефона: <div>{rightReservation.clientNumber}</div>
    Мастер: <div>{rightReservation.masterId}</div>
    Категория: <div>{rightReservation.serviceId}</div>
    <button>Совершить Изменения</button>
  </div>
  );
}

export default AdminReservationsForm;