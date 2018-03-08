import React from 'react';
import { withRouter, Redirect, Switch } from 'react-router-dom';
import ProtectedRoute from '../Common/ProtectedRoute';
import MoverCreation from './Create';
import Profile from './Profile';
import MoverEdit from './Edit';

import MoverProject from './Project'

const Mover = ({ match: { isExact } }) => {
  return (
    <Switch>
      <ProtectedRoute path="/mover/create" component={MoverCreation} />
      <ProtectedRoute path="/mover/edit" component={MoverEdit} />
      <ProtectedRoute path="/mover/profile/:moverId" component={Profile} />
      {/* <ProtectedRoute path="/mover/my-profile" component={Profile.MyMoverProfile} /> */}
      <ProtectedRoute path="/mover/project" component={MoverProject} />
      <Redirect from="*" to="/404" />
    </Switch>
  );
};

export default withRouter(Mover);
