import {
  RECEIVE_PROJECT,
  REMOVE_PROJECT
} from '../actions/project_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  debugger
  let newState;
  switch(action.type) {
    case RECEIVE_PROJECT:
      return action.steps;
    case REMOVE_PROJECT:
      return {};
    default:
      return state;
  }
};
