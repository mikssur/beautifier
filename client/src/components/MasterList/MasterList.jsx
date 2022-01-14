import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Master from '../Master/Master';


function ServiceList(props) {

  const masters = useSelector(state.mastersReducer.masters)
  //const dispatch = useDispatch()
  const { service } = useParams()

  //useEffect(() => {dispatch(fetchServicesAC())}, [dispatch])

  return (
    <div>
      <h2>{service}</h2>
      <ul>
        {masters.length ? masters.map((master) => <Master key={master.id} master={master} />) : <li>No masters</li>}
      </ul>
    </div>
  );
}

export default ServiceList;
