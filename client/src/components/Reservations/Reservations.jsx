import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Reservations(props) {
  const dispatch = useDispatch()
  const { reservations } = useSelector(state => state.reservationReducer)
  return (
    <div>
      {reservations.map(el => {
          return <>
              <div key={el.clientName}>
                Имя: <div>{el.clientName}</div>
                Номер телефона: <div>{el.clientNumber}</div>
                Мастер: <div>{el.masterId}</div>
                Категория: <div>{el.serviceId}</div>
                <button>Редактировать</button>
                <button>Удалить</button>
              </div>
          </>
        })}
    </div>
  );
}

export default Reservations;