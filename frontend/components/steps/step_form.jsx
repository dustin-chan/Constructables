import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', category: '', description: '', steps_attributes: []};
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
    this.props.processForm(user).then(res => this.props.history.push(`/users/${res.currentUser.id}`));
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
    const demoLogIn = () => this.props.logIn(
        {username: 'Guest', password: 'password'}
      ).then(res => this.props.history.push(`/users/${res.currentUser.id}`));
    return (
      <div id="login-wrapper">
        <button className="demo" onClick={demoLogIn}>Demo</button>
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
      </div>
    );
  }
}

export default StepFrom;
