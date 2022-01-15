import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Reservations(props) {
  const dispatch = useDispatch()
  const { reservations } = useSelector(state => state.reservationReducer)
  return (
    <div>
      {reservations.map(el => {
          return <>
              <div>
                <div>{el.clientName}</div>
                <div>{el.clientNunmber}</div>
                <div>{el.master}</div>
                <div>{el.category}</div>
                <button>Редактировать</button>
                <button>Удалить</button>
              </div>
          </>
        })}
    </div>
  );
}

export default Reservations;