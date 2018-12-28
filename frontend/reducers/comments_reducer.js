import { RECEIVE_PROJECT } from '../actions/project_actions';
import { REMOVE_COMMENT } from '../actions/comment_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  let newState;
  switch(action.type) {
    case RECEIVE_PROJECT:
    debugger
      if ( action.comments ) {
        return action.comments;
      } else {
        return state;
      }
      break;
    case REMOVE_COMMENT:
      newState = state;
      delete newState[action.commentId];
      return newState;
    default:
      return state;
  }
};
