import React from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';
import AddressStep from './AddressContainer';
import ItemsStep from './ItemsContainer';
import DateStep from './DateContainer';
import LogisticsStep from './LogisticsContainer';
import SearchSteps from './components/SearchSteps';

const Steps = ({ history, match }) => {
  const paths = [
    {
      path: '/business/search/steps/address',
      component: AddressStep
    },
    {
      path: '/business/search/steps/items',
      component: ItemsStep
    },
    {
      path: '/business/search/steps/date',
      component: DateStep
    },
    {
      path: '/business/search/steps/logistics',
      component: LogisticsStep
    }
  ];
  const getCurrentStep = (history) => paths.findIndex((p)=>p.path === history.location.pathname);

  return (
    <div>
      <SearchSteps current={getCurrentStep(history)} history={history} />
      <Switch>
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
    </div>
  );
};

export default withRouter(Steps);
