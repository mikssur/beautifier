import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Portfolio(props) {

  const dispatch = useDispatch()
  const { masters } = useSelector(state => state.portfolioReducer)

  useEffect(() => {
    dispatch({ type: 'PORTFOLIO_FETCH' })
  }, [dispatch])

  return (

    <>
      <div>
        {masters.map(el => {
          return <>
            <div key={el.id}>
              <div>
                <h3>{el.name}</h3>
                <p >{el.category}</p>
                <Link to={{ pathname: `/portfolio/${el.id}` }}>Познакомиться</Link>
              </div>
            </div>

          </>
        })}</div>


    </>
  );
}

export default Portfolio;
