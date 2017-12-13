import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import ProtectedRoute from '../../Common/ProtectedRoute';
import Overview from './Overview';
import Dashboard from './Dashboard';

const MoverProject = ({ match: { isExact } }) => {
  return (
    <Switch>
      <ProtectedRoute exact path="/mover/project" component={Dashboard} />
      <ProtectedRoute path="/mover/project/:projectId" component={Overview} />
    </Switch>
  );
};

export default withRouter(MoverProject);
