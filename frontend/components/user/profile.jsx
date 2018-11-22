import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Feed from './feed';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.requestUser = this.props.requestUser.bind(this);
  }

  componentDidMount() {
    this.requestUser(this.props.match.params.userId);
  }

  render() {
    debugger
    let username;
    let email;
    let description;
    let photoUrl;
    if (this.props.user) {
      username = this.props.user.username;
      email = this.props.user.email;
      description = this.props.user.description;
      photoUrl = this.props.user.photoUrl;
    }

    return (
      <>
        <div className="profile_content">
          <div className="avatar-large"/>
          <img src={photoUrl}/>
          <ul>
            <li>{username}</li>
            <li>{email}</li>
            <li>{description}</li>
          </ul>
        </div>
        <Feed/>
      </>
    );
  }
}

export default UserProfile;
