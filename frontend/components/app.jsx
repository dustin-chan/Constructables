import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import SignUpFormContainer from './session_form/sign_up_form_container';
import LogInFormContainer from './session_form/log_in_form_container';
import HeaderAuthContainer from './header/auth_container';
import UserProfileContainer from './user/profile_container';
import Home from './home/home';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = ({store}) => {
  return (
    <div className="parallax">
      <div>
        <header id="gbl-header" className="parallax_base">
          <div className="top-bar">
            <Link to="/">
              <h1>constructables</h1>
            </Link>
            <HeaderAuthContainer store={store}/>
          </div>
          <div className="bottom-bar">
            <Link to="/">
              <h3>Classes</h3>
            </Link>
            <Link to="/">
              <h3>Contests</h3>
            </Link>
            <Link to="/">
              <h3>Community</h3>
            </Link>
            <Link to="/">
              <h3>Education</h3>
            </Link>
          </div>
        </header>
      </div>
        <AuthRoute exact path="/login" component={LogInFormContainer}/>
        <AuthRoute exact path="/signup" component={SignUpFormContainer}/>
        <Route exact path="/" component={Home} />
        <ProtectedRoute exact path="/users/:userId" component={UserProfileContainer}/>
      <footer id="gbl-footer" className="parallax_base"></footer>
    </div>
  );
};

export default App;
