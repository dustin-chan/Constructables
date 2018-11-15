import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestUser(this.props.match.params.userId);
  }

  render() {
    const {username, email, description} = this.props.user;
    return (
      <div>
        <div className="avatar-large"/>
        <ul>
          <li>{username}</li>
          <li>{email}</li>
          <li>{description}</li>
        </ul>
      </div>
    );
  }
}

export default UserProfile;
