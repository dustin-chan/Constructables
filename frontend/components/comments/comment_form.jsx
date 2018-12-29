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

  clearForm() {
    this.setState({ body: '' })
  }

  handleSubmit(e) {
    e.preventDefault();

    const projectId = this.props.comment.projectId;

    if ( this.props.formType === "create" ) {
      this.props.processForm({ projectId, comment: { body: this.state.body } }).then( () => this.clearForm() );
    } else if ( this.props.formType === "edit" ) {
      this.props.updateBody( this.state.body );
      this.props.processForm({ projectId, comment: this.state }).then( () => this.props.toggleEdit() );
    }

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
    let buttonText;
    if ( this.props.formType === 'create' ) {
      buttonText = 'Add Comment';
    } else if ( this.props.formType === 'edit' ) {
      buttonText = 'Edit Comment';
    }
    // { this.renderErrors() }
    return (
      <form className="comment-form" onSubmit={ this.handleSubmit }>
        <textarea className="comment-textarea" value={ this.state.body } onChange={ this.update('body') }/>
        <button className="submit-comment-button">{ buttonText }</button>
      </form>
    );
  }
}

export default CommentForm;
