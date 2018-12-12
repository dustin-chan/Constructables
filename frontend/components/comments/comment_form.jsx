import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
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

    const projectId = ownProps.match.params.projectId;

    this.props.processForm({ projectId });
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

    const email = (
      <div>
        <input
          className="input-large"
          placeholder="Email"
          type="text"
          value={this.state.email}
          onChange={this.update('email')}
          />
        <br/>
      </div>
    );

    return (
        <form className="login-form" onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <br/>
          <br/>
            <input
              className="input-large"
              placeholder="Username"
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
              />
          <br/>
            {this.props.formType === 'Sign Me Up !' ? email : ''}
            <input
              className="input-large"
              placeholder="Password"
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              />
          <br/>
          <input className="authButton" type="submit" value={this.props.formType}/>
        </form>
    );
  }
}

export default StepFrom;
