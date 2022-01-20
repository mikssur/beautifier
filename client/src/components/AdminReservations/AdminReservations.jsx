import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';

import './AdminReservations.css';

function Reservations({id}) {
  const clientNameInput = useRef();
  const serviceInput = useRef();
  const priceInput = useRef();
  const numberInput = useRef();
  const masterInput = useRef();

  const dispatch = useDispatch()
  const [correctForm, setCorrectForm] = useState(false);
  const { reservations } = useSelector(state => state.reservationReducer)
  const rightReservation = reservations.find(el => el.id === id)
  function changeForm(event, id, clientNameInput, serviceInput, numberInput, masterInput){
    console.log(clientNameInput);
    dispatch({ type: 'CHANGE_RESERVATION_FORM', payload: {id, clientName: clientNameInput.current.value, clientNumber: numberInput.current.value, masterId: masterInput.current.value, serviceId: serviceInput.current.value, } })
    setCorrectForm(!correctForm)
  }
  function deleteUser(event, id) {
    dispatch({ type: 'DELETE_USER', payload: {id}})
  }
  //console.log(rightReservation);
  return (
    <div className="admin-reserv-item">
      {correctForm ? 
          <div>
            <p><strong>Имя</strong>: <input ref={clientNameInput} defaultValue={rightReservation.clientName}/></p>
            <p><strong>Номер телефона</strong>: <input ref={numberInput} defaultValue={rightReservation.clientNumber} /></p>
            <p><strong>Цена</strong>: <input ref={priceInput} defaultValue={rightReservation.price} /></p>
            <p><strong>Услуга</strong>: <input ref={serviceInput} defaultValue={rightReservation.serviceId} /></p>
            <p><strong>Мастер</strong>: <input ref={masterInput} defaultValue={rightReservation.masterId} /></p>
            <button onClick={(event) => changeForm(event, id, clientNameInput, serviceInput, numberInput, masterInput)}>Внести Изменения</button>
            <button onClick={() => setCorrectForm(!correctForm)}>Отмена</button>
          </div>
          :
          <div key={rightReservation.clientName}>
            <strong>Имя</strong>: <div>{rightReservation.clientName}</div>
            <strong>Номер телефона</strong>: <div>{rightReservation.clientNumber}</div>
            <strong>Цена</strong>: <div>{rightReservation.price}</div>
            <strong>Услуга</strong>: <div>{rightReservation.serviceId}</div>
            <strong>Мастер</strong>: <div>{rightReservation.masterId}</div>
            <button onClick={() => setCorrectForm(!correctForm)}>Редактировать</button>
            <button onClick={(event) => deleteUser(event, id)}>Удалить</button>
          </div>}
    </div>
  );
}

export default Reservations;