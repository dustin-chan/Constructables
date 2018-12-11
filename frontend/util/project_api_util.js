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

  return $.ajax({
    method: 'POST',
    url: `/api/projects`,
    data: formData,
    contentType: false,
    processData: false
  });
};

export const updateProject = (data) => {
  debugger
  return $.ajax({
    method: 'PATCH',
    url: `/api/projects/${data.id}`,
    data: data.formData,
    contentType: false,
    processData: false
  });
};

export const deleteProject = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/projects/${id}`
  });
};
