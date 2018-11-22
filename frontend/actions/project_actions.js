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

export const updateProject = project => dispatch => {
  return ProjectAPIUtil.updateProject(project).then(project => dispatch(receiveProject(project)),
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
