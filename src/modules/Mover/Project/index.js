import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import ProtectedRoute from '../../Common/ProtectedRoute';
import Summary from './Summary';
import Dashboard from './Dashboard';

const MoverProject = ({ match }) => {
  return (
    <Switch>
      <ProtectedRoute exact path={`${match.url}`} component={Dashboard} />
      <ProtectedRoute path={`${match.url}/:projectId`} component={Summary} />
    </Switch>
  );
};

export default withRouter(MoverProject);
