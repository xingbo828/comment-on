import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
// import ProtectedRoute from '../Common/ProtectedRoute';
import Profile from './Profile';
// import MoverConfiguration from './Configurations';

const Mover = ({ match: { isExact } }) => {
  return (
    <Switch>
      <Route path="/mover/profile/:moverId" component={Profile} />
      {/* <Route path="/mover/:moverId/configuration" component={MoverConfiguration} /> */}
    </Switch>
  );
};

export default withRouter(Mover);
