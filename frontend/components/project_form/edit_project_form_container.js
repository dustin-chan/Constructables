import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { updateProject, removeErrors, requestProject } from '../../actions/project_actions';
import ProjectForm from './project_form';

const msp = (state, ownProps) => {
  const project = state.entities.projects[ownProps.match.params.projectId]
    || {title: '', photoUrl: '', featured: 'false', category: 'craft', description: '', stepsAttributes: []};
  const stepsAttributes = Object.values(state.entities.steps);
  project.stepsAttributes = stepsAttributes;
  debugger
  const errors = state.errors;
  return {
    project,
    errors,
    formType: 'edit'
  };
};

const mdp = dispatch => {
  return {
    processForm: (project) => dispatch(updateProject(project)),
    requestProject: (id) => dispatch(requestProject(id)),
    removeErrors: () => dispatch(removeErrors())
  };
};

export default connect(msp, mdp)(ProjectForm);
