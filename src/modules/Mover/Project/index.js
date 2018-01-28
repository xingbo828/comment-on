import React from 'react';
import { withRouter } from 'react-router-dom';
import ProtectedRoute from '../../Common/ProtectedRoute';
import SwitchWithException from '../../Common/SwitchWithException';
import Summary from './Summary';
import Dashboard from './Dashboard';

const MoverProject = ({ match }) => {
  return (
    <SwitchWithException>
      <ProtectedRoute exact path={`${match.url}`} component={Dashboard} />
      <ProtectedRoute path={`${match.url}/:projectId`} component={Summary} />
    </SwitchWithException>
  );
};

export default withRouter(MoverProject);
