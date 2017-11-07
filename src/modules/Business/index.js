import React from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';
import ProtectedRoute from '../Common/ProtectedRoute';
import BusinessCreation from './Create';
import Profile from './Profile';
import BusinessEdit from './Edit'
import BusinessSearch from './Search';

const Business = ({ match: { isExact } }) => {
  return (
    <Switch>
      <ProtectedRoute
        path="/business/create"
        component={BusinessCreation}
      />
      <Route
        path="/business/profile/:businessId"
        component={Profile}
      />
      <ProtectedRoute
        path="/business/edit/:businessId"
        component={BusinessEdit}
      />
      <Route
        path="/business/search"
        component={BusinessSearch}
      />
    </Switch>
  );
};

export default withRouter(Business);
