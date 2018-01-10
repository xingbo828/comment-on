import Immutable from 'immutable';
import {
  NOTIFICATION_CENTER__UPDATE
} from './notificationCenterActions';

const initState = Immutable.fromJS({});

const notificationCenter = (state = initState, action) => {
  switch (action.type) {
    case NOTIFICATION_CENTER__UPDATE: {
      return state.withMutations(st => {
        st.setIn([action.project, action.conversation], action.unread);
      });
    }

    default:
      return state;
  }
};


export default notificationCenter;


const _sum = (collection) => collection.reduce((sum, x) => sum + x, 0);
// Selectors
export const getTotalUnread = (state) => state.getIn(['common', 'notificationCenter']).map(convs => convs.update(_sum)).update(_sum);

export const getConversationUnread = (state, projectId, conversationId) => {
  return state.getIn(['common', 'notificationCenter', projectId, conversationId]);
} ;
