import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProviderMarketing from './ProviderMarketing';
import Registration from './Registration';
import RegistrationSuccess from './Registration/RegistrationSuccess';

const Home = () => {
  return (
    <Switch>
      <Route exact path="/register" component={Registration} />
      <Route path="/register/success" component={RegistrationSuccess} />
      <Route path="/" component={ProviderMarketing} />
    </Switch>
  );
};

export default Home;
