import { connect } from 'react-redux';
import React from 'react';
// import { requestProject, deleteProject } from '../../actions/project_actions';
import Comment from './comment';

const msp = (state, ownProps) => {
  const currentUserId = state.session.id;
  const comment = ownProps.comment;

  return {
    comment,
    currentUserId
  };
};

// const mdp = dispatch => {
//   return {
//     requestProject: id => dispatch(requestProject(id)),
//     deleteProject: id => dispatch(deleteProject(id))
//   };
// };

export default connect(msp, null)(Comment);
