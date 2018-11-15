import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
      <div className="parallax_group">
        <div id="login-wrapper">
          <form className="login-form parallax_layer parallax_layer-base" onSubmit={this.handleSubmit}>
            {this.props.errors ? this.renderErrors() : ''}
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
          <div className="parallax_layer parallax_layer-back"/>
        </div>
      </div>
    );
  }
}

export default SessionForm;