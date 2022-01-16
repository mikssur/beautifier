import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import Master from '../Master/Master';


function MasterList(props) {

  const masters = useSelector(state => state.mastersReducer.masters)
  const dispatch = useDispatch()
  const { servicename } = useParams()

  //useEffect(() => {dispatch(fetchServicesAC())}, [dispatch])

  return (
    <div>
      <h2>{servicename}</h2>
      <ul>
        {masters.length ? masters.map((master) => <Master key={master.id} master={master} />) : <li>No masters</li>}
      </ul>
    </div>
  );
}

export default MasterList;
