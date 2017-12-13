import React from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';
import MoveConfig from './Move';


const Project = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.url}/move`} component={MoveConfig} />
    </Switch>
  );
};

export default withRouter(Project);
