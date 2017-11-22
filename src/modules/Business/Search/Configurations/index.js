import React from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import AddressStep from './Address';
import DateStep from './Date';
import LogisticsStep from './Logistics';
import Items from './Items';
import SearchSteps from './Shared/SearchSteps';
import StepsRouteTransition from './Shared/StepsRouteTransition';


const Configurations = ({ location, history, match }) => {
  const paths = [
    {
      path: '/business/search/configurations/address',
      component: AddressStep
    },
    {
      path: '/business/search/configurations/date',
      component: DateStep
    },
    {
      path: '/business/search/configurations/logistics',
      component: LogisticsStep
    },
    {
      path: '/business/search/configurations/items',
      component: Items
    }
  ];

  const getCurrentStep = (history) => paths.findIndex((p)=>p.path === history.location.pathname);
  return (
    <div>
      <SearchSteps current={getCurrentStep(history)} history={history} />
      <TransitionGroup>
        <StepsRouteTransition key={location.key}>
          {() => <Switch location={location}>
              {
                paths.map(p =>
                  <Route
                    path={p.path}
                    key={p.path}
                    component={p.component}
                  />
                )
              }
            </Switch>}
        </StepsRouteTransition>
      </TransitionGroup>
    </div>
  );
};

export default withRouter(Configurations);
