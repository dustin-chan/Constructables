import {
  EDITING_COMMENT,
} from '../actions/comment_actions';

export default (state = {}, action) => {
  let newState;
  switch(action.type) {
    case EDITING_COMMENT:
      return action.commentId;
    default:
      return state;
  }
};
