import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { requestUser } from '../../actions/session_actions';
import UserProfile from './profile';

const msp = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId]
  };
};

const mdp = dispatch => {
  return {
    requestUser: id => dispatch(requestUser(id))
  };
};

export default connect(msp, mdp)(UserProfile);
