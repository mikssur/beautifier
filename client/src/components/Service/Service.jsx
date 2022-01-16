import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { getFetchMastersAC } from '../../redux/actionCreators/mastersAC';


function Service({service}) {
  const dispatch = useDispatch()
  console.log('SERVICE RENDER', service)
  const servicename = service.name
  const id = service.id
  const currentURL = window.location.pathname
  console.log('URLURLURLURL V KOMPONENTE SERVICE', currentURL)
  return (
    <>
      <div>
        <li>Name: {service.name} Price: {service.price}</li>
      </div>

      <Link to={`${currentURL}/${servicename}`}>
      <button onClick={() => dispatch({type: 'GET_FETCH_MASTERS', payload: {id}})} size="small">Посмотреть мастеров</button>
      </Link>
    </>
  );
}

export default Service;
