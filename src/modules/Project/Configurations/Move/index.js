import React from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import AddressStep from './Address';
import DateStep from './Date';
import LogisticsStep from './Logistics';
import Items from './Items';
import Overview from './Overview';
import MoveConfigSteps from './Shared/MoveConfigSteps';
import FadeInRouteTransition from '../../../Common/RouteTransitions/FadeInRouteTransition';

const MoveConfigurations = ({ location, history, match }) => {
  const paths = [
    {
      path: '/project/configurations/move/address',
      component: AddressStep
    },
    {
      path: '/project/configurations/move/date',
      component: DateStep
    },
    {
      path: '/project/configurations/move/logistics',
      component: LogisticsStep
    },
    {
      path: '/project/configurations/move/items',
      component: Items
    },
    {
      path: '/project/configurations/move/overview',
      component: Overview
    }
  ];

  const getCurrentStep = (history) => paths.findIndex((p)=>p.path === history.location.pathname);
  return (
    <div>
      <MoveConfigSteps current={getCurrentStep(history)} history={history} />
      <TransitionGroup>
        <FadeInRouteTransition minHeight={800} key={location.key}>
          {() => (
            <Switch location={location}>
              {
                paths.map(p =>
                  <Route
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

export default withRouter(MoveConfigurations);
