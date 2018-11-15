import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { logIn, removeErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = ({ errors }) => {
  return {
    errors: errors,
    formType: 'Login',
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(logIn(user)),
    removeErrors: () => dispatch(removeErrors())
  };
};

export default connect(msp, mdp)(SessionForm);
