import React from 'react';
import { withRouter } from 'react-router-dom';
import ProtectedRoute from '../Common/ProtectedRoute';
import ConversationContainer from './ConversationContainer';
import SwitchWithException from '../Common/SwitchWithException';

const Conversation = ({ match }) => (
  <SwitchWithException>
    <ProtectedRoute
      exact
      path={`${match.url}/:conversationId`}
      component={ConversationContainer}
    />
  </SwitchWithException>
);

export default withRouter(Conversation);
