import React from 'react';
import { Switch, withRouter, Redirect} from 'react-router-dom';
import ProtectedRoute from '../Common/ProtectedRoute';
import BusinessCreation from './Create';

const Business = ({ match: { isExact } }) => {
  return (
    <Switch>
      <ProtectedRoute
        path="/business/create"
        component={BusinessCreation}
      />
      {
      /* <ProtectedRoute
        path="/business/:businessId"
        component={BusinessUpdate}
      /> */
      }
    </Switch>
  );
};

export default withRouter(Business);
