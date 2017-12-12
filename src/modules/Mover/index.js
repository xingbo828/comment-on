import React from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';
import ProtectedRoute from '../Common/ProtectedRoute';
import MoverCreation from './Create';
import MoverProfile from './Profile';
import MoverEdit from './Edit';
import Configurations from './Configurations';
import MoverProject from './Project'

const Mover = ({ match: { isExact } }) => {
  return (
    <Switch>
      <ProtectedRoute path="/mover/create" component={MoverCreation} />
      <ProtectedRoute path="/mover/profile/:moverId" component={MoverProfile} />
      <ProtectedRoute path="/mover/edit/:moverId" component={MoverEdit} />
      <ProtectedRoute path="/mover/project" component={MoverProject} />
      <Route path="/mover/configurations" component={Configurations} />
    </Switch>
  );
};

export default withRouter(Mover);
