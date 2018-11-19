import { combineReducers } from 'redux';

import users from './users_reducer';
import projects from './projects_reducer';
import project from './project_reducer';
import steps from './steps_reducer';

export default combineReducers({
  users,
  projects,
  project,
  steps
});
