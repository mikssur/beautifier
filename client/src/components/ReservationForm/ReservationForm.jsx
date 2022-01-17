import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import FreeTime from '../FreeTime/FreeTime';

function ReservationForm() {

  const dispatch = useDispatch()

  const { reservationServiceId, reservationMasterId, freeTime } = useSelector(state => state.reservationCategoriesReducer);

  function newDatee(event) {
    event.preventDefault()
    fetch('/createreserv', {
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
    dispatch({
      type: 'CLEAR_RESERV'
    })
  }

  function getFreeTime(event) {
    event.preventDefault()
    const select = event.target.value;

    (async () => {

      const response = await fetch(`/freetime/${select}`)
      const res = await response.json();
      console.log(res)
      dispatch({
        type: 'INIT_FREE_TIME',
        payload: res,
      })
    })();
  }

  return (
    <form onSubmit={newDatee}>
      <span>Выберите день: </span>
      <input name='Date' type="date" onChange={getFreeTime} />
      <br />
      <span>Свободное время: </span>
      <select name="time" >
        {freeTime ? freeTime.map(el => <FreeTime key={el} el={el} />) : null}
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

