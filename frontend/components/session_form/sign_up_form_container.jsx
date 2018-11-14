import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signUp } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = ({ errors }) => {
  return {
    errors: errors,
    formType: 'Sign Me Up !',
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(signUp(user)),
  };
};

export default connect(msp, mdp)(SessionForm);
