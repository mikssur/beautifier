import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { getFetchMastersAC } from '../../redux/actionCreators/mastersAC';


function Service({ service }) {
  const dispatch = useDispatch()
  console.log('SERVICE RENDER', service)
  const servicename = service.name
  const id = service.id
  const picture = service.picture
  const currentURL = window.location.pathname
  console.log('URLURLURLURL V KOMPONENTE SERVICE', currentURL, service)
  return (
    <>
      <Link to={`/categories/:categoryname/${servicename}/${id}`}>
        <li onClick={() => dispatch({ type: 'GET_FETCH_MASTERS', payload: { id } })} size="small">{service.name}</li>
      </Link>
      <div>Description: {service.description} </div>
      <p>!!!</p>
      <img src={`/${picture}`} alt="" />
      <p>!!!</p>
    </>
  );
}

export default Service;
