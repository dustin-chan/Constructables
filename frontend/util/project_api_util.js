export const fetchProjects = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/projects'
  });
};

export const fetchProject = id => {

  return $.ajax({
    method: 'GET',
    url: `/api/projects/${id}`
  });
};

export const createProject = formData => {
  debugger
  return $.ajax({
    method: 'POST',
    url: `/api/projects`,
    data: formData,
    contentType: false,
    processData: false
  });
};

export const updateProject = project => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/projects/${project.id}/edit`,
    data: {project}
  });
};

export const deleteProject = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/projects/${id}`
  });
};
