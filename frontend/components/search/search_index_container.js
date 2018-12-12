import { connect } from 'react-redux';
import React from 'react';
import SearchIndex from './search_index';

const msp = (state) => {

  return {
    projects: Object.values(state.entities.projects)
  };
};

export default connect(msp)(SearchIndex);
