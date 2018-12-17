import { connect } from 'react-redux';
import React from 'react';
import { requestProjects, requestProject } from '../../actions/project_actions';
import FeaturedProjects from './featured_projects';

const msp = (state) => {

  return {
    projects: Object.values(state.entities.projects)
  };
};

const mdp = dispatch => {
  return {
    requestProjects: () => dispatch(requestProjects()),
    requestProject: (id) => dispatch(requestProject(id))
  };
};

export default connect(msp, mdp)(FeaturedProjects);
