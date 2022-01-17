import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
function Reservations({id}) {
  const clientNameInput = useRef();
  const serviceInput = useRef();
  const categoryInput = useRef();
  const numberInput = useRef();
  const masterInput = useRef();

  const dispatch = useDispatch()
  const [correctForm, setCorrectForm] = useState(false);
  const { reservations } = useSelector(state => state.reservationReducer)
  const rightReservation = reservations.find(el => el.id === id)
  function changeForm(event, clientNameInput, serviceInput, categoryInput, numberInput, masterInput){

  }
  console.log(rightReservation);
  return (
    <div>
      {correctForm ? 
          <div>
            Имя: <input defaultValue={rightReservation.clientName}/>
            Номер телефона: <input defaultValue={rightReservation.clientNumber} />
            Цена: <input defaultValue={rightReservation.price} />
            Услуга: <input defaultValue={rightReservation.serviceId} />
            Мастер: <input defaultValue={rightReservation.masterId} />
            <button onClick={(event) => changeForm(event, clientNameInput, serviceInput, categoryInput, numberInput, masterInput)}>Совершить Изменения</button>
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
            <button>Удалить</button>
          </div>}
    </div>
  );
}

export default Reservations;