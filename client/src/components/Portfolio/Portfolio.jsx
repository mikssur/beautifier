import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Portfolio(props) {

  const dispatch = useDispatch()
  const { masters } = useSelector(state => state.portfolioReducer)

  console.log('portfolio.jsx', masters)

  useEffect(() => {
    dispatch({ type: 'PORTFOLIO_FETCH' })
    console.log(123);
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
                <button>Познакомиться</button>
              </div>
            </div>

          </>
        })}</div>


    </>
  );
}

export default Portfolio;
