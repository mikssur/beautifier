import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import './Nav.css';

function Nav(props) {
  const { session } = useSelector((state) => state.sessionReducer)
  const dispatch = useDispatch();


  // console.log(session.authClient, 'client session')
  console.log(session);
  async function signOut() {
    try {
      await fetch('/signout');
      dispatch({ type: 'SESSION_FETCH' })
    }
    catch (err) {
      console.log(err.message)
    }

  }

  return (
    <nav className="main-nav">

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
      { 
      session.isAdmin ?
        <> <li>
          <Link to='/admincabinet'>Admin Cabinet</Link>
        </li>
          <button onClick={() => signOut()}>Sign Out</button></>
        : 
        session.authClient ? 
        <> 
        <li>
        <Link to='/profile'> Cabinet</Link>
      </li>
        <button onClick={() => signOut()}>Sign Out</button></> 
        : 
        <>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
      </>
      }
    </ul>
    </nav>
  );
}

export default Nav;
