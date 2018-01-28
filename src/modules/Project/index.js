import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import ProtectedRoute from '../Common/ProtectedRoute';
import Overview from './Overview';
import Management from './Management';
import Configurations from './Configurations';
import SwitchWithException from '../Common/SwitchWithException';

const Project = ({ match: { isExact } }) => {
  return (
    <SwitchWithException>
      <Route path="/projects/configurations" component={Configurations} />
      <ProtectedRoute exact path="/projects" component={Overview} />
      <ProtectedRoute path="/projects/:projectId" component={Management} />
    </SwitchWithException>
  );
};

export default withRouter(Project);
