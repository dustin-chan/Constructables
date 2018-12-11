import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({currentUser, logOut, logIn}) => {
  if (currentUser) {
    return (
      <div>
      <Link to={`/users/${currentUser.id}`}>
      <div className="avatar"/>
      </Link>
      <div className="dropdown">
      <button className="logout" onClick={logOut}>Log Out</button>
      </div>
      </div>
    )
  }

  return (
    <div>
      <form onSubmit=`this.props.`>
      </form>
      <nav className="login-signup">
        <Link className="login" to="/login">Login</Link>
        <Link className="signup" to="/signUp">Sign Up</Link>
      </nav>
    </div>
  );
}

export default Header;
