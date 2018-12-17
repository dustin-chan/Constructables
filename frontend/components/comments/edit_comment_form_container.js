import { connect } from 'react-redux';
import { createComment, removeErrors } from '../../actions/comment_actions';
import CommentForm from './comment_form';

const msp = ({ errors }, ownProps) => {
  const comment = state.entities.comments[ownProps.commentId]
    || { body: '', projectId: ownProps.match.params.projectId };
  return {
    comment: { body: '', projectId: ownProps.match.params.projectId },
    errors: errors,
    formType: 'create'
  };
};

const mdp = dispatch => {
  return {
    processForm: (data) => dispatch(updateProject(data)),
    removeErrors: () => dispatch(removeErrors())
  };
};

export default connect(msp, mdp)(CommentForm);
