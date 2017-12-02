import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import ProfilePicture from './ProfilePicture';
import BasicInfo from './BasicInfo';
import CrewMember from './CrewMember';
// import Vehicles from './Vehicles';
import ProtectedRoute from '../../Common/ProtectedRoute';
// import Steps from './Shared/Steps';
import FadeInRouteTransition from '../../Common/RouteTransitions/FadeInRouteTransition';

const MoverEdit = ({ location, history, match }) => {
  const paths = [
    {
      path: '/mover/edit/:moverId/basic-profile',
      component: BasicInfo
    },
    {
      path: '/mover/edit/:moverId/profile-picture',
      component: ProfilePicture
    },
    {
      path: '/mover/edit/:moverId/crew-member',
      component: CrewMember
    },
    // {
    //   path: '/mover/edit/:moverId/vehicle',
    //   component: Vehicles
    // }
  ];

  // const getCurrentStep = (history) => paths.findIndex((p)=>p.path === history.location.pathname);
  return (
    <div>
      {/* <SearchSteps current={getCurrentStep(history)} history={history} /> */}
      <TransitionGroup>
        <FadeInRouteTransition minHeight={800} key={location.key}>
          {() => (
            <Switch location={location}>
              {
                paths.map(p =>
                  <ProtectedRoute
                    path={p.path}
                    key={p.path}
                    component={p.component}
                  />
                )
              }
            </Switch>
          )}
        </FadeInRouteTransition>
      </TransitionGroup>
    </div>
  );
};

export default withRouter(MoverEdit);

