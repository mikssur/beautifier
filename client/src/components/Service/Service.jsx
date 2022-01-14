import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFetchMastersAC } from '../../redux/actionCreators/mastersAC';


function Service({service}) {
  const dispatch = useDispatch()
  return (
    <>
      <div>
        <li>Name: {service.name}, Number: {service.id}</li>
      </div>

      <Link to={`/categories/categoryname/${service}`}>
      <button onClick={() => dispatch(getFetchMastersAC(service.name))} size="small">Выбрать услугу</button>
      </Link>
    </>
  );
}

export default Service;
