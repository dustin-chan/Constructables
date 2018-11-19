import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.requestUser = this.props.requestUser.bind(this);
  }

  componentDidMount() {
    this.requestUser(this.props.match.params.userId);
  }

  render() {
    let username;
    let email;
    let description;
    if (this.props.user) {
      username = this.props.user.username;
      email = this.props.user.email;
      description = this.props.user.description;
    }
    return (
      <div className="profile_content">
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
