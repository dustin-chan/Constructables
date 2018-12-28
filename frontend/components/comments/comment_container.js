import { connect } from 'react-redux';
import React from 'react';
import { updateComment, deleteComment } from '../../actions/comment_actions';
import Comment from './comment';

const msp = (state, ownProps) => {
  const currentUserId = state.session.id;
  const comment = ownProps.comment;

  return {
    comment,
    currentUserId
  };
};

const mdp = dispatch => {
  return {
    updateComment: id => dispatch(updateComment(id)),
    deleteComment: id => dispatch(deleteComment(id))
  };
};

export default connect(msp, mdp)(Comment);
