import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import './PortfolioCard.css';

function PortfolioCard(props) {
  const dispatch = useDispatch();
  const { masterId } = useParams()
  const { services } = useSelector((state) => state.portfolioCReducer)
  console.log(services, 'max');
  useEffect(() => {
    dispatch({ type: 'PORTFOLIO_CARD_FETCH', payload: { masterId } })
  }, [dispatch])
  return (
    <>
      {services ? services.map(el => <p>{el.name}</p>) : 'zagruzka'}

    </>
  );
}

export default PortfolioCard;
