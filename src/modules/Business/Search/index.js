import React from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';

import SearchResult from './Result';
import SearchConfigurations from './Configurations';

const Search = ({ match: { isExact } }) => {
  return (
      <Switch>
        <Route
          path="/business/search/configurations"
          component={SearchConfigurations}
        />

        {<Route
          path="/business/search/result"
          component={SearchResult}
        />}
      </Switch>
  );
};

export default withRouter(Search);
