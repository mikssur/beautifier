import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
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
  console.log(rightReservation);
  return (
    <div>
      {correctForm ? 
          <div>
            Имя: <input ref={clientNameInput} defaultValue={rightReservation.clientName}/>
            Номер телефона: <input ref={numberInput} defaultValue={rightReservation.clientNumber} />
            Цена: <input ref={priceInput} defaultValue={rightReservation.price} />
            Услуга: <input ref={serviceInput} defaultValue={rightReservation.serviceId} />
            Мастер: <input ref={masterInput} defaultValue={rightReservation.masterId} />
            <button onClick={(event) => changeForm(event, id, clientNameInput, serviceInput, numberInput, masterInput)}>Внести Изменения</button>
            <button onClick={() => setCorrectForm(!correctForm)}>Отмена</button>
          </div>
          :
          <div key={rightReservation.clientName}>
            Имя: <div>{rightReservation.clientName}</div>
            Номер телефона: <div>{rightReservation.clientNumber}</div>
            Цена: <div>{rightReservation.price}</div>
            Услуга: <div>{rightReservation.serviceId}</div>
            Мастер: <div>{rightReservation.masterId}</div>
            <button onClick={() => setCorrectForm(!correctForm)}>Редактировать</button>
            <button onClick={(event) => deleteUser(event, id)}>Удалить</button>
          </div>}
    </div>
  );
}

export default Reservations;