import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import SignUpFormContainer from './session_form/sign_up_form_container';
import LogInFormContainer from './session_form/log_in_form_container';

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">
          <h1>Constructables</h1>
        </Link>
      </header>
      <Switch>
        <Route exact path="/login" component={LogInFormContainer}/>
        <Route exact path="/signup" component={SignUpFormContainer}/>
      </Switch>
    </div>
  );
};

export default App;
