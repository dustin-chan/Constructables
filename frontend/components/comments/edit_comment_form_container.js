import { connect } from 'react-redux';
import { updateComment, removeErrors } from '../../actions/comment_actions';
import CommentForm from './comment_form';

const msp = ({ errors }, ownProps) => {
  return {
    comment: ownProps.comment,
    errors: errors,
    formType: 'edit'
  };
};

const mdp = dispatch => {
  return {
    processForm: (data) => dispatch(updateComment(data)),
    removeErrors: () => dispatch(removeErrors())
  };
};

export default connect(msp, mdp)(CommentForm);
