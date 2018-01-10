import Immutable from 'immutable';
import {
  CONVERSATION__INIT,
  CONVERSATION__CLEAR,
  CONVERSATION__LOADED
} from './conversationAction';

const initState = Immutable.fromJS({});

export default (state = initState, action) => {
  switch (action.type) {
    case CONVERSATION__INIT: {
      return state.withMutations(st => {
        st.setIn([action.conversationId, 'status'], 'PENDING');
        st.setIn([action.conversationId, 'messages'], Immutable.fromJS([]));
      });
    }
    case CONVERSATION__LOADED: {
      return state.withMutations(st => {
        st.setIn([action.conversationId, 'status'], 'LOADED');
        st.setIn(
          [action.conversationId, 'messages'],
          st.getIn([action.conversationId, 'messages']).concat(action.data)
        );
      });
    }
    case CONVERSATION__CLEAR: {
      return state.delete(action.conversationId);
    }

    default:
      return state;
  }
};

// Selectors
export const getConversation = (state, conversationId) =>
  state.getIn(['conversation', conversationId]);
