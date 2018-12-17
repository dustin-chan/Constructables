import { connect } from 'react-redux';
import { createComment, removeErrors } from '../../actions/comment_actions';
import CommentForm from './comment_form';

const msp = ({ errors }, { projectId }) => {
  
  return {
    comment: { body: '', projectId },
    errors: errors,
    formType: 'create'
  };
};

const mdp = dispatch => {
  return {
    processForm: (data) => dispatch(createComment(data)),
    removeErrors: () => dispatch(removeErrors())
  };
};

export default connect(msp, mdp)(CommentForm);
