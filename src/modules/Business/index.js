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
      <ProtectedRoute
        path="/business/:businessId"
        component={Profile}
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
