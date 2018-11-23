import { connect } from 'react-redux';
import React from 'react';
import { requestProject } from '../../actions/project_actions';
import ProjectShow from './project_show';

const msp = (state, ownProps) => {
  const projectId = ownProps.match.params.projectId;
  const steps = Object.values(state.entities.steps).map(step => {
    if (step.projectId === parseInt(projectId)) {
      return step;
    }
  });
  return {
    project: state.entities.projects[projectId],
    steps
  };
};

const mdp = dispatch => {

  return {
    requestProject: id => dispatch(requestProject(id))
  };
};

export default connect(msp, mdp)(ProjectShow);
