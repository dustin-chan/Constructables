import * as ProjectAPIUtil from '../util/project_api_util';

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS'

export const requestProjects = searchTerm => dispatch => {
  debugger
  return ProjectAPIUtil.fetchProjects(searchTerm).then(projects => dispatch(receiveProjects(projects)));
};

const receiveProjects = projects => {
  return {
    type: RECEIVE_PROJECTS,
    projects
  };
};

export const requestProject = (id) => dispatch => {

  return ProjectAPIUtil.fetchProject(id).then(payload => dispatch(receiveProject(payload)));
};

const receiveProject = ({ project, steps }) => {
  return {
    type: RECEIVE_PROJECT,
    project,
    steps
  };
};

const receiveErrors = errors => {
  return {
    type: RECEIVE_PROJECT_ERRORS,
    errors
  };
};

export const removeErrors = () => {
  return {
    type: REMOVE_ERRORS,
    errors: {}
  };
};

export const createProject = project => dispatch => {
  return ProjectAPIUtil.createProject(project).then(project => dispatch(receiveProject(project)),
    err => dispatch(receiveErrors(err.responseJSON)));
};

export const updateProject = data => dispatch => {
  debugger
  return ProjectAPIUtil.updateProject(data).then(project => dispatch(receiveProject(project)),
    err => dispatch(receiveErrors(err.responseJSON)));
};

const removeProject = id => {
  return {
    type: REMOVE_PROJECT,
    projectId: id
  };
};

export const deleteProject = id => dispatch => {
  return ProjectAPIUtil.deleteProject(id).then(() => dispatch(removeProject(id)));
};
