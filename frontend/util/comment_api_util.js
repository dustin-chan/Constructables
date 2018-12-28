export const createComment = ({ projectId, comment }) => {

  return $.ajax({
    method: 'POST',
    url: `/api/projects/${ projectId }/comments`,
    data: { comment: comment }
  });
};

export const updateComment = ({ comment }) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/projects/${ comment.projectId }/comments/${comment.id}`,
    data: {comment: comment}
  });
};

export const deleteComment = ({ projectId, commentId }) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/projects/${ projectId }/comments/${ commentId }`
  });
};
