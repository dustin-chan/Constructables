import {
  RECEIVE_ALL_PROJECTS,
  RECEIVE_PROJECT,
  REMOVE_PROJECT
} from '../actions/project_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_ALL_PROJECTS:
      return merge({}, state, action.projects);
    case REMOVE_PROJECT:
      return {};
    default:
      return state;
  }
};
