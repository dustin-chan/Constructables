import { connect } from 'react-redux';
import React from 'react';
import { requestProjects } from '../../actions/project_actions';
import SearchForm from './search';
import { withRouter } from 'react-router';

const mdp = dispatch => {
  return {
    requestProjects: searchTerm => dispatch(requestProjects(searchTerm))
  };
};

export default connect(null, mdp)(withRouter(SearchForm));
