import React from 'react';
import { Switch, withRouter, Redirect } from 'react-router-dom';
import { compose } from 'recompose';

const SwitchWithException = ({
  children,
  ...rest
}) => (
  <Switch
    {...rest}
  >
    {children}
    <Redirect from="*" to="/404" />
  </Switch>
);

export default compose(
  withRouter
)(SwitchWithException);
