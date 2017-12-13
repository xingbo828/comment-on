import React from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';
import MoveConfig from './Move';


const Project = ({ match: { isExact } }) => {
  return (
    <Switch>
      <Route path="/project/configurations/move" component={MoveConfig} />
    </Switch>
  );
};

export default withRouter(Project);
