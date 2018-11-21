import * as ProjectAPIUtil from '../util/project_api_util';

export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS'

export const requestProjects = () => dispatch => {
  return ProjectAPIUtil.fetchProjects().then(projects => dispatch(receiveProjects(projects)));
};

const receiveProjects = projects => {
  return {
    type: RECEIVE_ALL_PROJECTS,
    projects
  };
};

export const requestProject = (id) => dispatch => {
  debugger
  return ProjectAPIUtil.fetchProject(id).then(project => dispatch(receiveProject(project)));
};

const receiveProject = (project) => {
  debugger
  return {
    type: RECEIVE_PROJECT,
    project
  };
};

const receiveErrors = errors => {
  return {
    type: RECEIVE_PROJECT_ERRORS,
    errors
  };
};

const removeErrors = () => {
  return {
    type: REMOVE_ERRORS,
    errors: {}
  };
};

export const createProject = project => {
  return ProjectAPIUtil.createProject().then(project => dispatch(receiveProject(project)),
    err => dispatch(receiveErrors(err.responseJSON)));
};

export const updateProject = project => {
  return ProjectAPIUtil.updateProject().then(project => dispatch(receiveProject(project)),
    err => dispatch(receiveErrors(err.responseJSON)));
};

const removeProject = id => {
  return {
    type: REMOVE_PROJECT,
    projectId: id
  };
};

export const deleteProject = id => {
  return ProjectAPIUtil.deleteProject(id).then(() => dispatch(removeProject(id)));
};
