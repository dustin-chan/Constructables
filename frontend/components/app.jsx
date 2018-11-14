import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import SignUpFormContainer from './session_form/sign_up_form_container';
import LogInFormContainer from './session_form/log_in_form_container';
import HeaderAuthContainer from './header/auth_container'
import Home from './home/home'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = ({store}) => {
  return (
    <div className="parallax">
      <header id="gbl-header" className="parallax_layer parallax_layer-base">
        <div className="top-bar">
          <Link to="/">
            <h1>constructables</h1>
          </Link>
          <HeaderAuthContainer store={store}/>
        </div>
      </header>
      <div>
        <AuthRoute exact path="/login" component={LogInFormContainer}/>
        <AuthRoute exact path="/signup" component={SignUpFormContainer}/>
      </div>
        <Route exact path="/" component={Home} />
      <footer id="gbl-footer" className="parallax_layer parallax_layer-base"></footer>
    </div>
  );
};

export default App;
