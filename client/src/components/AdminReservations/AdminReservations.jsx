import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import { time } from '../../helpers/time'

function Reservations({ id }) {
  const clientNameInput = useRef();
  const serviceInput = useRef();
  const numberInput = useRef();
  const masterInput = useRef();
  const timeInput = useRef();
  const dateInput = useRef();


  const dispatch = useDispatch()
  const [correctForm, setCorrectForm] = useState(false);
  const { reservations } = useSelector(state => state.reservationReducer);
  const { masters, services } = useSelector(state => state.adminCabinetReducer);

  const rightReservation = reservations.find(el => el.id === id)
  function changeForm(event, id, clientNameInput, numberInput, masterInput, serviceInput, dateInput, timeInput) {
    event.preventDefault()
    dispatch({
      type: 'CHANGE_RESERVATION_FORM',
      payload: {
        id,
        clientName: clientNameInput.current.value,
        clientNumber: numberInput.current.value,
        master: masterInput.current.value,
        service: serviceInput.current.value,
        date: dateInput.current.value,
        time: timeInput.current.value,
      }
    })
    setCorrectForm(!correctForm)
  }

  function deleteUser(event, id) {
    dispatch({ type: 'DELETE_USER', payload: { id } })
  }
  useEffect(() => {
    (async () => {
      const response = await fetch(`/masters_services`)
      const { masters, services } = await response.json();

      dispatch({ type: 'INIT_MASTERS_AND_SERVICES', payload: { masters, services } })
    })();
  }, [])

  return (
    <div>
      {correctForm ?
        <div>
          Имя: <input ref={clientNameInput} defaultValue={rightReservation.clientName} />
          Номер телефона: <input ref={numberInput} defaultValue={rightReservation.clientNumber} />
          <p>Изменить услугу:</p>
          <select ref={serviceInput}>
            {services.map(el => <option key={el.id}>{el.name}</option>)}
          </select>
          <p>Изменить мастера:</p>
          <select ref={masterInput}>
            {masters.map(el => <option key={el.id}>{el.name}</option>)}
          </select>
          <p>Изменить дату:</p>
          <input ref={dateInput} type="date" />
          <p>Изменить время:</p>
          <select ref={timeInput}>
            {time.map(el => <option key={el}>{el}</option>)}
          </select>

          <button onClick={(event) => changeForm(event, id, clientNameInput, numberInput, masterInput, serviceInput, dateInput, timeInput)}>Внести Изменения</button>
          <button onClick={() => setCorrectForm(!correctForm)}>Отмена</button>
        </div>
        :
        <div key={rightReservation.clientName}>
          Имя: <div>{rightReservation.clientName}</div>
          Номер телефона: <div>{rightReservation.clientNumber}</div>
          Услуга: <div>{rightReservation.serviceId}</div>
          Цена: <div>{rightReservation.price}</div>
          Мастер: <div>{rightReservation.masterId}</div>
          Дата: <div>{rightReservation.date}</div>
          Время: <div>{rightReservation.time}</div>

          <button onClick={() => setCorrectForm(!correctForm)}>Редактировать</button>
          <button onClick={(event) => deleteUser(event, id)}>Удалить</button>
        </div>}
    </div>
  );
}

export default Reservations;
