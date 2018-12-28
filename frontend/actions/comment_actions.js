import * as CommentAPIUtil from '../util/comment_api_util';
import { receiveProject } from './project_actions';

export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';

const receiveErrors = errors => {

  return {
    type: RECEIVE_COMMENT_ERRORS,
    errors
  };
};

export const removeErrors = () => {
  return {
    type: REMOVE_ERRORS,
    errors: {}
  };
};

export const createComment = data => dispatch => {

  return CommentAPIUtil.createComment(
    data).
  then(
    project =>
    dispatch
    (receiveProject(project)),
    err => dispatch(receiveErrors
      (err.responseJSON)));
};

export const updateComment = data => dispatch => {
  return CommentAPIUtil.updateComment(data).then(project => dispatch(receiveProject(project)),
    err => dispatch(receiveErrors(err.responseJSON)));
};

const removeComment = id => {
  return {
    type: REMOVE_COMMENT,
    commentId: id
  };
};

export const deleteComment = data => dispatch => {
  return CommentAPIUtil.deleteComment(data).then(() => dispatch(removeComment(data.commentId)));
};
