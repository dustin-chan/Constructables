import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.comment;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderErrors.bind(this);
  }

  componentDidMount() {
    this.setState( { editing: false } );
  }

  componentWillUnmount() {
    this.props.removeErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const projectId = this.props.comment.projectId;

    this.props.processForm({ projectId, comment: { body: this.state.body } });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="auth_error" key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <form className="comment-form" onSubmit={ this.handleSubmit }>
        { this.renderErrors() }
        <input type="textarea" value={ this.state.body } onChange={ this.update('body') }/>
        <button className="add-comment-button">Add Comment</button>
      </form>
    );
  }
}

export default CommentForm;
