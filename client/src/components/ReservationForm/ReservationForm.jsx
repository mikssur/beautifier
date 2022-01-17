import React from 'react';
import { useSelector } from 'react-redux';

function ReservationForm() {

  const { reservationServiceId, reservationMasterId } = useSelector(state => state.reservationCategoriesReducer)
  function newDatee(event) {
    event.preventDefault()
    fetch('http://localhost:3001/createreserv', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        clientName: event.target.clientName.value,
        clientNumber: event.target.clientNumber.value,
        masterId: reservationMasterId,
        serviceId: reservationServiceId,
        time: event.target.time.value,
        date: event.target.Date.value,
      })
    })
  }

  return (
    <form onSubmit={newDatee}>
      <span>Выберите день: </span>
      <input name='Date' type="date" />
      <br />
      <span>Свободное время: </span>
      <select name="time">
        <option>14:00</option>
        <option>15:00</option>
        <option>16:00</option>
      </select>
      <br />
      <span>Ваше имя:</span>
      <input name='clientName' type="text" />
      <br />
      <span>Ваше номер телефона:</span>
      <input name='clientNumber' type="text" />
      <br />
      <input type="submit" />
    </form>
  );
}

export default ReservationForm;
