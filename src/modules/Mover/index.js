import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import ProtectedRoute from '../Common/ProtectedRoute';
import SwitchWithException from '../Common/SwitchWithException';
import MoverCreation from './Create';
import Profile from './Profile';
import MoverEdit from './Edit';

import MoverProject from './Project'

const Mover = ({ match: { isExact } }) => {
  return (
    <SwitchWithException>
      <ProtectedRoute path="/mover/create" component={MoverCreation} />
      <ProtectedRoute path="/mover/edit" component={MoverEdit} />
      <ProtectedRoute path="/mover/profile/:moverId" component={Profile.MoverProfile} />
      <ProtectedRoute path="/mover/my-profile" component={Profile.MyMoverProfile} />
      <ProtectedRoute path="/mover/project" component={MoverProject} />
      <Redirect from="*" to="/404" />
    </SwitchWithException>
  );
};

export default withRouter(Mover);
