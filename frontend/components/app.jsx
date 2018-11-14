import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import SignUpFormContainer from './session_form/sign_up_form_container';
import LogInFormContainer from './session_form/log_in_form_container';
import HeaderAuthContainer from './header/auth_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = ({store}) => {
  return (
    <div>
      <header>
        <Link to="/">
          <h1>Constructables</h1>
        </Link>
        <HeaderAuthContainer store={store}/>
      </header>
      <Switch>
        <AuthRoute exact path="/login" component={LogInFormContainer}/>
        <AuthRoute exact path="/signup" component={SignUpFormContainer}/>
      </Switch>
    </div>
  );
};

export default App;
