import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { isLoggedin } from '../Account/accountReducer';
import mapImmutablePropsToPlainProps from './mapImmutablePropsToPlainProps';


const ProtectedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route {...rest} render= {props => (isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />)} />
);

export default compose(
  withRouter,
  connect(state => isLoggedin(state)),
  mapImmutablePropsToPlainProps
)(ProtectedRoute);
