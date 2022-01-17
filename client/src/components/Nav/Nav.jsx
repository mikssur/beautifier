import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

function Nav(props) {
  const dispatch = useDispatch();
  const { session } = useSelector((state) => state.sessionReducer)
  // должно быть в юз эффекте

  useEffect(() => {
    dispatch({ type: 'SESSION_FETCH' })
  }, [dispatch])

 // console.log(session.authClient, 'client session')
  console.log(session);
  async function signOut() {
    try {
      await fetch('/signout');
    }
    catch (err) {
      console.log(err.message)
    }

  }

  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/reviews">Review</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      {session.authClient && session.isAdmin ?
        <li>
          <Link to="/admincabinet">Кабинет</Link>
        </li> : ''}
      <li>
          <Link to="/reservation">Записаться</Link>
      </li>
      {session.authClient ?
        <> <li>
          <Link to='/profile'> Cabinet</Link>
        </li>
          <button onClick={() => signOut()}>Sign Out</button></>
        : <>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
        </>}


    </ul>
  );
}

export default Nav;
