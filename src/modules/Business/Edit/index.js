import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import ProtectedRoute from '../../Common/ProtectedRoute';
import ProfilePictureContainer from './ProfilePictureContainer';
import BasicInfoContainer from './BasicInfoContainer';
import CrewMemberContainer from './CrewMemberContainer';
import VehiclesContainer from './VehiclesContainer';
import Settings from '../../Common/Settings';



const BusinessEdit = ({ match: { isExact, params: { businessId } } }) => {
  const SideBarLinks = [
    {
      title: "Basic info",
      path: `/business/edit/${businessId}/basic`
    },
    {
      title: "Profile pictures",
      path: `/business/edit/${businessId}/pictures`
    },
    {
      title: "Vehicles",
      path: `/business/edit/${businessId}/vehicles`
    },
    {
      title: "Team",
      path: `/business/edit/${businessId}/team`
    }
  ];
  return (
    <Settings links={SideBarLinks}>
      <Switch>
        <ProtectedRoute
          path="/business/edit/:businessId/basic"
          component={BasicInfoContainer}
        />
        <ProtectedRoute
          path="/business/edit/:businessId/pictures"
          component={ProfilePictureContainer}
        />
        <ProtectedRoute
          path="/business/edit/:businessId/team"
          component={CrewMemberContainer}
        />
        <ProtectedRoute
          path="/business/edit/:businessId/vehicles"
          component={VehiclesContainer}
        />
      </Switch>
    </Settings>
  );
};

export default withRouter(BusinessEdit);
