import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import Profile from './Profile';
import MoverConfiguration from './Configurations';
import MoverConfigurationSuccess from './Configurations/Success';

const Mover = () => {
  return (
    <Switch>
      <Route path="/mover/profile/:moverId" component={Profile} />
      <Route path="/mover/:moverId/configuration" component={MoverConfiguration} />
      <Route path="/mover/configuration/success" component={MoverConfigurationSuccess} />
    </Switch>
  );
};

export default withRouter(Mover);
