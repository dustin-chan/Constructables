import React from 'react';
import { Link } from 'react-router-dom';
import SearchFormContainer from '../search/search_container';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.logOut = this.props.logOut;
    this.logIn = this.props.logIn;
  }


  render() {
    debugger
    if (this.currentUser) {
      return (
        <div>
          <SearchFormContainer history={this.props.history}/>
          <Link to={`/users/${this.currentUser.id}`}>
          <div className="avatar"/>
          </Link>
          <div className="dropdown">
            <button className="logout" onClick={this.logOut}>Log Out</button>
          </div>
        </div>
      );
    }

    return (
      <div>
        <SearchFormContainer history={this.props.history}/>
        <nav className="login-signup">
          <Link className="login" to="/login">Login</Link>
          <Link className="signup" to="/signUp">Sign Up</Link>
        </nav>
      </div>
    );
  }
}

export default Header;
