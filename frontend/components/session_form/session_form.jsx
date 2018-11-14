import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', email: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.props.formType} or {this.props.navLink}
          {this.props.errors ? this.renderErrors() : ''}
          <br/>
          <div>
            <label>Username:
              <input
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
                />
            </label>
            <br/>
            <label>Email:
              <input
                type="text"
                value={this.state.email}
                onChange={this.update('email')}
                />
            </label>
            <br/>
            <label>Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                />
            </label>
            <br/>
            <input type="submit" value={this.props.formType}/>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
