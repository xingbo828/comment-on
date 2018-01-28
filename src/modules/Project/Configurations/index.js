import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import MoveConfig from './Move';
import Success from './Success';
import SwitchWithException from '../../Common/SwitchWithException';

const Project = ({ match }) => {
  return (
    <SwitchWithException>
      <Route path={`${match.url}/move`} component={MoveConfig} />
      <Route path={`${match.url}/success`} component={Success} />
    </SwitchWithException>
  );
};

export default withRouter(Project);
