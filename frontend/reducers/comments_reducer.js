import {
  RECEIVE_PROJECTS,
  RECEIVE_PROJECT,
  REMOVE_PROJECT
} from '../actions/project_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  let newState;
  switch(action.type) {
    case RECEIVE_PROJECT:
      return action.comments;
    case REMOVE_COMMENT:
      newState = state;
      delete newState[action.commentId];
      return newState;
    default:
      return state;
  }
};
