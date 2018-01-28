import React from 'react';
import { Switch, withRouter, Redirect } from 'react-router-dom';
import { compose, branch, renderComponent } from 'recompose';
import isLoggedIn from './isLoggedIn';
import Spin from '../../globalComponents/Spin';

const ProtectedRoute = ({
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            search: `?redirect=${location.pathname}${location.search}`
          }}
        />
      )}
  />
);

export default compose(
  withRouter,
  isLoggedIn,
  branch(
    props => props.loginStatus === 'UNINIT',
    renderComponent(Spin.FullScreenSpinner)
  )
)(ProtectedRoute);
