import * as SessionAPIUtil from '../util/session_api_util';
import { fetchUser } from '../util/user_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';

const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

const logOutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

export const removeErrors = () => {
  return {
    type: REMOVE_ERRORS,
    errors: {}
  };
};

const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const signUp = user => dispatch => {
  return SessionAPIUtil.signUp(user).then(user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON)));
};

export const logIn = user => dispatch => {
  return SessionAPIUtil.logIn(user).then(user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON)));
};

export const logOut = () => dispatch => {
  return SessionAPIUtil.logOut().then(() => dispatch(logOutCurrentUser()));
};
