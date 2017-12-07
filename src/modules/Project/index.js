import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import ProtectedRoute from '../Common/ProtectedRoute';
import Overview from './Overview';
import Management from './Management';

const Project = ({ match: { isExact } }) => {
  return (
    <Switch>
      <ProtectedRoute path="/project/overview" component={Overview} />
      <ProtectedRoute path="/project/:projectId/management" component={Management} />
    </Switch>
  );
};

export default withRouter(Project);
