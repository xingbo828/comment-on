import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import MoverConfiguration from './Configurations';
import MoverConfigurationSuccess from './Configurations/Success';

const Mover = () => {
  return (
    <Switch>
      <Route exact path="/configuration/move/:slug/success" component={MoverConfigurationSuccess} />
      <Route path="/configuration/move/:slug" component={MoverConfiguration} />
    </Switch>
  );
};

export default withRouter(Mover);
