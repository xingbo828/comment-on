import React from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';
import MoveConfig from './Move';
import Success from './Success';

const Project = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.url}/move`} component={MoveConfig} />
      <Route path={`${match.url}/success`} component={Success} />
    </Switch>
  );
};

export default withRouter(Project);
