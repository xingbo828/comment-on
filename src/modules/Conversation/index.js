import React from 'react';
import { withRouter, Switch } from 'react-router-dom';
import ProtectedRoute from '../Common/ProtectedRoute';
import ConversationContainer from './ConversationContainer';

const Conversation = ({ match }) => (
  <Switch>
    <ProtectedRoute
      exact
      path={`${match.url}/:conversationId`}
      component={ConversationContainer}
    />
  </Switch>
);

export default withRouter(Conversation);
