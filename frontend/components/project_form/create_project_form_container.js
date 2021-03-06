import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { createProject, removeErrors } from '../../actions/project_actions';
import ProjectForm from './project_form';

const msp = ({ errors }) => {
  return {
    project: {title: '', photoUrl: '', photoFile: null, featured: 'false', category: 'craft', description: '', stepsAttributes: []},
    errors: errors,
    formType: 'create'
  };
};

const mdp = dispatch => {
  return {
    processForm: (project) => dispatch(createProject(project)),
    removeErrors: () => dispatch(removeErrors())
  };
};

export default connect(msp, mdp)(ProjectForm);
