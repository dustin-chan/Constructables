import React from 'react';
import { Link } from 'react-router-dom';

const HeaderAuth = ({currentUser, logOut}) => {
  const logOutButton = <button onClick={logOut}>Log Out</button>;
  const sessionLinks = (
    <nav className="login-signup">
      <Link className="login" to="/login">Login</Link>
      <Link className="signup" to="/signUp">Sign Up</Link>
    </nav>
  );
  return currentUser ? logOutButton : sessionLinks;
}

export default HeaderAuth;
