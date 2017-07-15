import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { compose, renderComponent, branch } from 'recompose';
import isLoggedIn from './isLoggedIn';
import mapImmutablePropsToPlainProps from './mapImmutablePropsToPlainProps';

import Spinner from '../../globalComponents/Spinner';

const ProtectedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route {...rest} render= {props => (isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />)} />
);


export default compose(
  withRouter,
  isLoggedIn,
  mapImmutablePropsToPlainProps,
  branch(
    props => props.loginStatus === 'UNINIT',
    renderComponent(Spinner)
  )
)(ProtectedRoute);
