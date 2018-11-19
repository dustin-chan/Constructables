import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { logIn, signUp, removeErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = ({ errors }) => {
  return {
    errors: errors,
    formType: 'Sign Me Up !',
  };
};

const mdp = dispatch => {
  return {
    logIn: (user) => dispatch(logIn(user)),
    processForm: (user) => dispatch(signUp(user)),
    removeErrors: () => dispatch(removeErrors())
  };
};

export default connect(msp, mdp)(SessionForm);
