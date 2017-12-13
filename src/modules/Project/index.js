import React from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';
import ProtectedRoute from '../Common/ProtectedRoute';
import Overview from './Overview';
import Management from './Management';
import Configurations from './Configurations';

const Project = ({ match: { isExact } }) => {
  return (
    <Switch>
      <Route path="/project/configurations" component={Configurations} />
      <ProtectedRoute exact path="/project" component={Overview} />
      <ProtectedRoute path="/project/:projectId" component={Management} />
    </Switch>
  );
};

export default withRouter(Project);
