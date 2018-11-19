import { connect } from 'react-redux';
import React from 'react';
import { requestProjects } from '../../actions/project_actions';
import FeaturedProjects from './featured_projects';

const msp = (state) => {

  return {
    projects: Object.values(state.entities.projects)
  };
};

const mdp = dispatch => {
  return {
    requestProjects: () => dispatch(requestProjects())
  };
};

export default connect(msp, mdp)(FeaturedProjects);
