import React from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import AddressStep from './Address';
import DateStep from './Date';
import LogisticsStep from './Logistics';
import Items from './Items';
import Overview from './Overview';
import SearchSteps from './Shared/SearchSteps';
import FadeInRouteTransition from '../../Common/RouteTransitions/FadeInRouteTransition';

const Configurations = ({ location, history, match }) => {
  const paths = [
    {
      path: '/mover/configurations/address',
      component: AddressStep
    },
    {
      path: '/mover/configurations/date',
      component: DateStep
    },
    {
      path: '/mover/configurations/logistics',
      component: LogisticsStep
    },
    {
      path: '/mover/configurations/items',
      component: Items
    },
    {
      path: '/mover/configurations/overview',
      component: Overview
    }
  ];

  const getCurrentStep = (history) => paths.findIndex((p)=>p.path === history.location.pathname);
  return (
    <div>
      <SearchSteps current={getCurrentStep(history)} history={history} />
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

export default withRouter(Configurations);
