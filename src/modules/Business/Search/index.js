import React from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';

import SearchResult from './Result';
import SearchSteps from './Steps';

const Search = ({ match: { isExact } }) => {
  return (
      <Switch>
        <Route
          path="/business/search/steps"
          component={SearchSteps}
        />

        {<Route
          path="/business/search/result"
          component={SearchResult}
        />}
      </Switch>
  );
};

export default withRouter(Search);
