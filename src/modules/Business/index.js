import React from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';
import ProtectedRoute from '../Common/ProtectedRoute';
import BusinessCreation from './Create';
import Profile from './Profile';
import BusinessSearch from './Search';

const Business = ({ match: { isExact } }) => {
  return (
    <Switch>
      <ProtectedRoute
        path="/business/create"
        component={BusinessCreation}
      />
      <ProtectedRoute
        path="/business/:businessId"
        component={Profile}
      />
      <Route
        path="/business/search"
        component={BusinessSearch}
      />
    </Switch>
  );
};

export default withRouter(Business);
