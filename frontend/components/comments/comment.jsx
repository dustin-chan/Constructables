import React from 'react';
import EditCommentFormContainer from './edit_comment_form_container';
import { Link } from 'react-router-dom';

class Step extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.comment;
    this.updateBody = this.updateBody.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  componentDidMount() {

  }

  updateBody(body) {
    this.setState({ body })
  }

  toggleEdit() {
    if ( this.state.editing ===  true ) {
      this.setState({ editing: false });
    } else {
      setTimeout(() => this.setState({ editing: true }), 1000);
    }
  }

  render() {
    let commentButtons;

    if ( this.props.currentUserId === this.state.authorId ) {
      commentButtons = (
        <div className="comment-buttons">
          <button className="comment-button edit-comment" onClick={ this.toggleEdit }>Edit</button>|
          <button className="comment-button delete-comment" onClick={ () => this.props.deleteComment( { projectId: this.state.projectId, commentId: this.state.id } ).then(() => window.location.reload()) }>Delete</button>
        </div>
      );
    } else {
      commentButtons = '';
    }

    if ( this.state.editing === true ) {
      return (
        <EditCommentFormContainer comment={this.state} updateBody={this.updateBody} toggleEdit={this.toggleEdit} />
      );
    }

    return (
      <div>
        <div className="comments-container">
          <li key={`comment-body-${this.state.id}`} className="comment">{this.state.body}</li>
          <li key={`comment-username=${this.state.id}`} className="comment-username">
            <Link to={`/users/${this.state.authorId}`}>
              by {this.state.authorUsername}
            </Link>
          </li>
        </div>
        { commentButtons }
      </div>
    );
  }
}

export default Step;
