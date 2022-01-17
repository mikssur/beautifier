import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReservationMasters from '../ReservationMasters/ReservationMasters';
import ItemReservationCategory from './ItemReservationCategory';
import ReservationServices from './ReservationServices';
import ReservationForm from '../ReservationForm/ReservationForm'

function ReservationCategories(props) {



  const { reservationCategories } = useSelector(state => state.reservationCategoriesReducer)
  const { reservationServices } = useSelector(state => state.reservationCategoriesReducer)
  const { reservationMasters } = useSelector(state => state.reservationCategoriesReducer)
  const { reservationMasterId } = useSelector(state => state.reservationCategoriesReducer)

  // console.log(reservationMasters);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'GET_FETCH_RESERVATION_CATEGORIES' })
  }, [dispatch])

  return (
    <div>
      {reservationCategories.map(el => <ItemReservationCategory key={el.id} name={el.name} id={el.id} />)}
      <div>
        {reservationServices ? reservationServices.map(el => <ReservationServices key={el.id} id={el.id} name={el.name} />) : null}
      </div>
      <div>
        {reservationMasters ? reservationMasters.map(el => <ReservationMasters key={el.id} id={el.id} name={el.name} />) : 'netu'}
      </div>
      <div>
        {reservationMasterId ? <ReservationForm /> : 'netu'}
      </div>
    </div>
  );
}

export default ReservationCategories;
