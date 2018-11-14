import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { logIn } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Log In',
    navLink: <Link to="/signUp">Sign Up</Link>
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(logIn(user)),
  };
};

export default connect(msp, mdp)(SessionForm);
