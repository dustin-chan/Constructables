import { connect } from 'react-redux';
import React from 'react';
import { fetchProjects } from '../../actions/project_actions';
import SearchForm from './search';

const mdp = dispatch => {
  return {
    fetchProjects: seachTerm => dispatch(fetchProjects(searchTerm))
  };
};

export default connect(null, mdp)(SearchForm);
