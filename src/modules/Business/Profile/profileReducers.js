import Immutable from 'immutable';
import { combineReducers } from 'redux-immutable';

import {
  LOADED_PROFILE,
  LOADING_PROFILE
} from './profileActions';

const initProfileState = Immutable.fromJS({});

const profile = (state = initProfileState, action) => {
  switch (action.type) {
    case LOADED_PROFILE: {
      return state.withMutations((st) => {
        st.setIn([action.data.key, 'profile'], action.data.profile);
        st.setIn([action.data.key, 'status'], 'LOADED');
      });
    }

    case LOADING_PROFILE: {
      return state.withMutations((st) => {
        st.setIn([action.data.key, 'status'], 'PENDING');
      });
    }

    default:
      return state;
  }
};

export default profile;


// Selectors
export const getProfile = (state) => (businessId) => state.getIn(['business', 'profile', businessId]);
