import Immutable from 'immutable';
import { CONVERSATION__LOADED } from './conversationAction';

const initState = Immutable.fromJS({
  status: 'UNINIT',
  messages: []
});

export default (state = initState, action) => {
  switch (action.type) {

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


