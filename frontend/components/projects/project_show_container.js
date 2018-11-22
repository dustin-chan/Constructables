import { connect } from 'react-redux';
import React from 'react';
import { requestProject } from '../../actions/project_actions';
import ProjectShow from './project_show';

const msp = (state, ownProps) => {

  return {
    project: state.entities.projects[ownProps.match.params.projectId],
    steps: state.entities.steps
  };
};

const mdp = dispatch => {

  return {
    requestProject: id => dispatch(requestProject(id))
  };
};

export default connect(msp, mdp)(ProjectShow);
