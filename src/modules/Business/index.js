import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import ProtectedRoute from '../Common/ProtectedRoute';
import BusinessCreation from './Create';
import Profile from './Profile';


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
    </Switch>
  );
};

export default withRouter(Business);
