export const fetchProjects = data => {
  
  return $.ajax({
    method: 'GET',
    url: '/api/projects',
    data: {searchTerm: data}
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
