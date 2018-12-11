import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { logIn, logOut } from '../../actions/session_actions';
import Header from './header';

const msp = ({session, entities: {users}}) => {
  return {
    currentUser: users[session.id]
  };
};

const mdp = dispatch => {
  return {
    logOut: () => dispatch(logOut()),
    logIn: user => dispatch(logIn(user))
  };
};

export default connect(msp, mdp)(Header);
