import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { logOut } from '../../actions/session_actions';
import HeaderAuth from './auth';

const msp = ({session, entities: {users}}) => {
  return {
    currentUser: users[session.id]
  };
};

const mdp = dispatch => {
  return {
    logOut: () => dispatch(logOut())
  };
};

export default connect(msp, mdp)(HeaderAuth);
