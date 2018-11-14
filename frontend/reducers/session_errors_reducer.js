import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
} from '../actions/session_actions';
import merge from 'lodash/merge';

export default (state = [], action) => {
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      let newState = merge([], state);
      newState.push(action.error);
      return newState;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};
