import React from 'react';

class Step extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.comment;
    this.editComment = this.editComment.bind(this);
  }

  componentDidMount() {

  }

  editComment() {
    this.setState({editing: true});
  }

  render() {
    let commentButtons;

    if ( this.props.currentUserId === this.state.authorId ) {
      commentButtons = (
        <div>
          <button onClick={ this.editComment }>Edit Comment</button>
          <button onClick={ () => this.props.deleteComment( this.state.projectId ) } />
        </div>
      );
    } else {
      commentButtons = '';
    }

    if ( this.state.editing === true ) {
      return (
        <EditCommentFormContainer comment={this.state} />
      )
    }

    return (
      <div className="comments-container">
        <li key={`comment-body-${this.state.id}`} className="comment">{this.state.body}</li>
        <li key={`comment-username=${this.state.id}`} className="comment-username">by {this.state.authorUsername}</li>
        { commentButtons }
      </div>
    );
  }
}

export default Step;
