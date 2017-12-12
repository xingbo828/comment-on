import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import ProtectedRoute from '../../Common/ProtectedRoute';
import Overview from './Overview';
import Dashboard from './Dashboard';

const MoverProject = ({ match: { isExact } }) => {
  return (
    <Switch>
      <ProtectedRoute path="/mover/project/:projectId/overview" component={Overview} />
      <ProtectedRoute path="/mover/project/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default withRouter(MoverProject);
