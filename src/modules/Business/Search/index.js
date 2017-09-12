import React from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';
import AddressStep from './AddressContainer';
import ItemsStep from './ItemsContainer';
import DateStep from './DateContainer';
import LogisticsStep from './LogisticsContainer';
import SearchResult from './SearchBusinessContainer';

const Search = ({ match: { isExact } }) => {
  return (
      <Switch>
        <Route
          path="/business/search/steps/address"
          component={AddressStep}
        />
        <Route
          path="/business/search/steps/items"
          component={ItemsStep}
        />
        <Route
          path="/business/search/steps/date"
          component={DateStep}
        />
        <Route
          path="/business/search/steps/logistics"
          component={LogisticsStep}
        />

        <Route
          path="/business/search/result"
          component={SearchResult}
        />
      </Switch>
  );
};

export default withRouter(Search);
