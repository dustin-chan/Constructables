import {
  RECEIVE_PROJECTS,
  RECEIVE_PROJECT,
  REMOVE_PROJECT
} from '../actions/project_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  let newState;
  switch(action.type) {
    case RECEIVE_PROJECTS:
      return action.projects;
    case RECEIVE_PROJECT:
      return merge({}, state, {[action.project.id]: action.project});
    case REMOVE_PROJECT:
    debugger
      newState = state;
      delete newState[action.projectId];
      return newState;
    default:
      return state;
  }
};
