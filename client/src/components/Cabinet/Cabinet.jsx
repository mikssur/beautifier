
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Cabinet(props) {
  const dispatch = useDispatch()
  const { reservations, masters, services } = useSelector(state => state.cabinetReducer.reservation)
  console.log(reservations, 'client console')
  useEffect(() => {
    dispatch({ type: 'CABINET_FETCH' })
  }, [dispatch])
  return (
    <div>
      {reservations ?
        reservations.map(el => {
          return <><div key={el.id}>
            <p>{el.clientName}</p>
            <p>{el.clientNumber}</p>
            {masters.map(master => {
              if (master.id === el.masterId) {
                return <p>{master.name}</p>
              }
            })}
            {services.map(service => {
              if (service.id === el.serviceId) {
                return <p>{service.name}</p>
              }
            })}
            <button>Удалить запись</button></div></>
        }) : <p>Записи отсутствуют</p>
      }     </div>
  );
}

export default Cabinet;
