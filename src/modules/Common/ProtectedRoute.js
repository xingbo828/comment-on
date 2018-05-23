import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { compose, branch, renderComponent } from 'recompose';
import isLoggedIn from './isLoggedIn';
import isCompletedProfile from './isCompletedProfile';
import Spin from '../../globalComponents/Spin';

const ProtectedRoute = ({
  component: Component,
  isLoggedIn,
  user,
  isCompletedProfile,
  location,
  shouldCheckProfile,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      (isLoggedIn && user.emailVerified &&(!shouldCheckProfile || isCompletedProfile)) ? (
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
  isCompletedProfile,
  branch(
    props => props.loginStatus === 'UNINIT',
    renderComponent(Spin.FullScreenSpinner)
  )
)(ProtectedRoute);
