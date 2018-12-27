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
    let commentEdit;

    if ( this.props.currentUserId === this.state.authorId ) {
      commentEdit = (
        <button onClick={ this.editComment }>Edit Comment</button>
      );
    } else {
      commentEdit = '';
    }

    return (
      <div className="comments-container">
        <li key={`comment-body-${this.state.id}`} className="comment">{this.state.body}</li>
        <li key={`comment-username=${this.state.id}`} className="comment-username">by {this.state.authorUsername}</li>
        {commentEdit}
      </div>
    );
  }
}

export default Step;
