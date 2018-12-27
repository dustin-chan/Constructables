import { connect } from 'react-redux';
import React from 'react';
import { requestProject, deleteProject } from '../../actions/project_actions';
import ProjectShow from './project_show';

const msp = (state, ownProps) => {
  const currentUserId = state.session.id;
  const projectId = ownProps.match.params.projectId;

  const steps = Object.values(state.entities.steps).map(step => {
    if (step.projectId === parseInt(projectId)) {
      return step;
    }
  });

  let comments;
  debugger

  if ( state.entities.comments ) {
    comments = Object.values(state.entities.comments);
  }


  return {
    project: state.entities.projects[projectId],
    steps,
    comments,
    currentUserId
  };
};

const mdp = dispatch => {
  return {
    requestProject: id => dispatch(requestProject(id)),
    deleteProject: id => dispatch(deleteProject(id))
  };
};

export default connect(msp, mdp)(ProjectShow);
