import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import SignUpFormContainer from './session_form/sign_up_form_container';
import LogInFormContainer from './session_form/log_in_form_container';
import HeaderAuthContainer from './header/auth_container';
import UserProfileContainer from './user/profile_container';
import FeaturedProjectsContainer from './projects/featured_projects_container';
import ProjectShowContainer from './projects/project_show_container';
import ProjectFormEditContainer from './project_form/edit_project_form_container';
import ProjectForm from './project_form/project_form';
import Home from './home/home';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = ({store}) => {
  return (
    <div>
      <header id="gbl-header">
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

      <Route exact path="/" component={Home} />
      <Route exact path="/featured/" component={FeaturedProjectsContainer} />
      <Route exact path="/form" component={ProjectForm} />
      <Route exact path="/projects/:projectId" component={ProjectShowContainer} />
      <Route exact path="/projects/:projectId/edit" component={ProjectFormEditContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/users/:userId" component={UserProfileContainer} />

      <footer id="gbl-footer"></footer>
    </div>
  );
};

export default App;
