import React from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';
import ProtectedRoute from '../Common/ProtectedRoute';
import Overview from './Overview';
import Management from './Management';
import Configurations from './Configurations';

const Project = ({ match: { isExact } }) => {
  return (
    <Switch>
      <Route path="/projects/configurations" component={Configurations} />
      <ProtectedRoute exact path="/projects" component={Overview} />
      <ProtectedRoute path="/projects/:projectId" component={Management} />
    </Switch>
  );
};

export default withRouter(Project);
