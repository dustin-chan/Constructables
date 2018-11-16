import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', email: '', password: ''};
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
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(stuff => this.props.history.push(`/users/${stuff.currentUser.id}`));
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
      <div id="login-wrapper" className="parallax_group">
        <div className="parallax_layer parallax_base">
          <form className="login-form" onSubmit={this.handleSubmit}>
            {this.renderErrors()}
            <br/>
            <div className="form-input">
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
            </div>
          </form>
        </div>
        <div className="parallax_layer parallax_back"/>
      </div>
    );
  }
}

export default SessionForm;
