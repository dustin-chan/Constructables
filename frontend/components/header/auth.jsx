import React from 'react';
import { Link } from 'react-router-dom';

const HeaderAuth = ({currentUser, logOut}) => {
  const avatar = (
    <div>
      <div className="avatar"/>
      <div className="dropdown">
        <button className="logout" onClick={logOut}>Log Out</button>
      </div>
    </div>
  )
  const sessionLinks = (
    <nav className="login-signup">
      <Link className="login" to="/login">Login</Link>
      <Link className="signup" to="/signUp">Sign Up</Link>
    </nav>
  );
  return currentUser ? avatar : sessionLinks;
}

export default HeaderAuth;
