import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { compose, branch, renderNothing } from 'recompose';
import isLoggedIn from './isLoggedIn';

const ProtectedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route {...rest} render= {props => (isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />)} />
);


export default compose(
  withRouter,
  isLoggedIn,
  branch(
    props => props.loginStatus === 'UNINIT',
    renderNothing
  )
)(ProtectedRoute);
