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
    if (this.props.currentUser) {
      return (
        <div>
          <Link to={`/users/${this.props.currentUser.id}`}>
          <div className="avatar"/>
          </Link>
          <div className="dropdown">
            <button type="button" className="logout" onClick={this.logOut}>Log Out</button>
          </div>
          <SearchFormContainer history={this.props.history}/>
        </div>
      );
    }

    return (
      <div>
        <nav className="login-signup">
          <Link className="login" to="/login">Login</Link>
          <Link className="signup" to="/signUp">Sign Up</Link>
        </nav>
        <SearchFormContainer history={this.props.history}/>
      </div>
    );
  }
}

export default Header;
