import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import Profile from './Profile';
import MoverConfiguration from './Configurations';
import MoverConfigurationSuccess from './Configurations/Success';

const Mover = () => {
  return (
    <Switch>
      <Route path="/profile/:slug" component={Profile} />
      <Route exact path="/configuration/:slug" component={MoverConfiguration} />
      <Route path="/configuration/:slug/success" component={MoverConfigurationSuccess} />
    </Switch>
  );
};

export default withRouter(Mover);
