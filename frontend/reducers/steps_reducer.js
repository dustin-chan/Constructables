import {
  RECEIVE_PROJECT,
  REMOVE_PROJECT
} from '../actions/project_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  let newState;
  switch(action.type) {
    case RECEIVE_PROJECT:
      return merge({}, state, action.steps);
    case REMOVE_PROJECT:
      return {};
    default:
      return state;
  }
};
