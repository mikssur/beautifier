import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import FreeTime from '../FreeTime/FreeTime';

function ReservationForm() {

  const dispatch = useDispatch()

  const { reservationServiceId, reservationMasterId, freeTime } = useSelector(state => state.reservationCategoriesReducer);
  // console.log(new Date);
  const thisDate = new Date().toLocaleDateString()
  // 18.01.2022
  const day = thisDate.slice(0, 2)
  const month = thisDate.slice(3, 5)
  const year = thisDate.slice(-4)
  const nowDate = year + '-' + month + '-' + day

  // console.log(nowDate);

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
    // console.log('select++++', select);

    (async () => {

      const response = await fetch(`/freetime/${select}`)
      const res = await response.json();
      // console.log(res)
      dispatch({
        type: 'INIT_FREE_TIME',
        payload: res,
      })
    })();
  }

  return (
      <form onSubmit={newDatee}>
        <span>Выберите день: </span>
        <input name='Date' type="date" onChange={getFreeTime} min={nowDate} />
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
        <input name='clientNumber' type="tel"
          placeholder="+79123456789" />
        <br />
        <input type="submit" />
      </form>
  );
}

export default ReservationForm;

