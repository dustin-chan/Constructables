import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import SignUpFormContainer from './session_form/sign_up_form_container';
import LogInFormContainer from './session_form/log_in_form_container';
import HeaderContainer from './header/auth_container';
import UserProfileContainer from './user/profile_container';
import FeaturedProjectsContainer from './projects/featured_projects_container';
import ProjectShowContainer from './projects/project_show_container';
import CreateProjectFormContainer from './project_form/create_project_form_container';
import EditProjectFormContainer from './project_form/edit_project_form_container';
import Home from './home/home';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = ({store}) => {
  return (
    <div>
      <header id="gbl-header">
        <div className="top-bar">
          <Link to="/" className="header-link">
            <div/>
            <h1 className="header-title">Constructables</h1>
          </Link>
          <HeaderContainer store={store}/>
        </div>
        <div className="bottom-bar">
          <Link to="/project/create">
            <h3>Create Constructable</h3>
          </Link>
        </div>
      </header>

      <Route exact path="/" component={Home} />
      <Route exact path="/featured/" component={FeaturedProjectsContainer} />
      <Route exact path="/projects/:projectId" component={ProjectShowContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/project/create" component={CreateProjectFormContainer} />
      <ProtectedRoute exact path="/projects/:projectId/edit" component={EditProjectFormContainer} />
      <ProtectedRoute exact path="/users/:userId" component={UserProfileContainer} />

      <footer id="gbl-footer"></footer>
    </div>
  );
};

// <Route exact path="/projects/:projectId/edit" component={ProjectFormEditContainer} />
export default App;
