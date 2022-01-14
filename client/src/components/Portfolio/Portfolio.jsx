import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Portfolio(props) {

  const dispatch = useDispatch()
  const { masters } = useSelector(state => state.masterReducer)


  useEffect(() => {
    dispatch({ type: 'MASTERS_FETCH' })
    console.log(123);
  }, [dispatch])

  return (
    <>
      {
        masters.map(el => {
          <div className='master'>
            <div>
              <p>{el.name}</p>

              <button>Познакомиться</button>
            </div>
            <div className='work'>

            </div>
          </div>
        })
      }
    </>
  );
}

export default Portfolio;
