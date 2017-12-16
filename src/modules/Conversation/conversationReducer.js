import Immutable from 'immutable';
import { CONVERSATION__OPEN, CONVERSATION__CLOSE,  CONVERSATION__LOADED } from './conversationAction';

const initState = Immutable.fromJS({
  visible: false,
  conversationId: null,
  status: 'UNINIT',
  messages: []
});

export default (state = initState, action) => {
  switch (action.type) {
    case CONVERSATION__OPEN: {
      return state.withMutations(st => {
        st.set('visible', true);
        st.set('conversationId', action.data);
      });
    }

    case CONVERSATION__CLOSE: {
      return state.withMutations(st => {
        st.set('visible', false);
      });
    }

    case CONVERSATION__LOADED: {
      return state.withMutations(st => {
        st.set('status', 'LOADED');
        st.set('messages', st.get('messages').concat(action.data))
      });
    }


    default:
      return state;
  }
};

// Selectors
export const getConversation = (state) => state.getIn(['conversation']);


