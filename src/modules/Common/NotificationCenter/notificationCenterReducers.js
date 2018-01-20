import Immutable from 'immutable';
import {
  NOTIFICATION_CENTER__UPDATE
} from './notificationCenterActions';

const initState = Immutable.fromJS({});

const notificationCenter = (state = initState, action) => {
  switch (action.type) {
    case NOTIFICATION_CENTER__UPDATE: {
      return state.withMutations(st => {
        st.setIn([action.project, action.conversation], Immutable.fromJS(action.messags));
      });
    }

    default:
      return state;
  }
};


export default notificationCenter;


const _sum = (collection) => collection.reduce((sum, x) => sum + x, 0);
// Selectors
export const getTotalUnreadCount = (state) => state.getIn(['common', 'notificationCenter']).map(convs => convs.map(c => c.size).update(_sum)).update(_sum);

export const getConversationUnread = (state, projectId, conversationId) => {
  const exists = state.hasIn(['common', 'notificationCenter', projectId, conversationId]);
  if(exists) {
    return state.getIn(['common', 'notificationCenter', projectId, conversationId]).size;
  }
  return 0;
};

export const getProjectUnreadCount = (state, projectId) => {
  const exists = state.hasIn(['common', 'notificationCenter', projectId]);
  if(exists) {
    const conversations = state.getIn(['common', 'notificationCenter', projectId]);
    const total = conversations.map((v, k) => {
      const conversationUnread = getConversationUnread(state, projectId, k);
      return conversationUnread;
    }).update(_sum);
    return total;
  }
  return 0;
};

export const getUnreadMsgs = (state) => {
  const projects = state.getIn(['common', 'notificationCenter']);
  return projects.reduce((prevproject, currentProject) => {
    const convos = currentProject.reduce((prevConvo, currentConvo) => {
      return prevConvo.concat(currentConvo);
    }, Immutable.List());
    return prevproject.concat(convos)
  }, Immutable.List())
};
