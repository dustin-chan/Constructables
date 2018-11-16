import * as ProjectAPIUtil from '../util/project_api_util';

export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';

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
  return ProjectAPIUtil.fetchProject().then(project => dispatch(receiveProject(project)));
};

const receiveProject = project => {
  return {
    type: RECEIVE_PROJECT,
    project
  };
};

export const createProject = project => {
  return ProjectAPIUtil.createProject().then(project => dispatch(receiveProject(project)));
};

export const updateProject = project => {
  return ProjectAPIUtil.updateProject().then(project => dispatch(receiveProject(project)));
};

const removeProject = id => {
  return {
    type: REMOVE_PROJECT,
  };
};

export const deleteProject = id => {
  return ProjectAPIUtil.deleteProject(id).then(() => dispatch(id));
};
