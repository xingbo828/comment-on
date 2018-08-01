import Immutable from 'immutable';

import {
  LOADED_MOVER_PROFILE,
  LOADING_MOVER_PROFILE,
  ERROR_MOVER_PROFILE
} from '../moverAction';

import {
  GET_REVIEW_PENDING,
  GET_REVIEW_SUCCESS,
  GET_REVIEW_FAIL
} from './profileActions'

const initProfileState = Immutable.fromJS({
  // status: 'UNINIT',
  // profile: null,
  // reviews: {}
});

const profile = (state = initProfileState, action) => {
  switch (action.type) {
    case LOADED_MOVER_PROFILE: {
      return state.withMutations((st) => {
        const profile = Immutable.fromJS(action.data.profile).withMutations((pr) => {
          if(action.data.profile.profileImgs) {
            pr.set('profileImgs', Immutable.fromJS((Object.values(action.data.profile.profileImgs))));
          }
        });
        st.setIn([action.data.key, 'profile', 'result'], profile);
        st.setIn([action.data.key, 'profile', 'status'], 'LOADED');
      });
    }

    case LOADING_MOVER_PROFILE: {
      return state.withMutations((st) => {
        st.setIn([action.data.key, 'profile', 'status'], 'PENDING');
      });
    }

    case ERROR_MOVER_PROFILE: {
      return state.withMutations((st) => {
        st.setIn([action.data.key, 'profile', 'status'], 'ERROR');
      });
    }

    case GET_REVIEW_PENDING: {
      return state.withMutations((st) => {
        st.setIn([action.provider, 'reviews', 'status'], 'PENDING');
      });
    }

    case GET_REVIEW_SUCCESS: {
      return state.withMutations((st) => {
        st.setIn([action.provider, 'reviews', 'status'], 'LOADED');
        st.setIn([action.provider, 'reviews', 'result'], action.data);
      });
    }

    case GET_REVIEW_FAIL: {
      return state.withMutations((st) => {
        st.setIn([action.provider, 'reviews', 'status'], 'ERROR');
      });
    }

    default:
      return state;
  }
};

export default profile;


// Selectors
export const getProfileData = (state, slug) => state.getIn(['mover', 'profile', slug, 'profile', 'result']);
export const getProfileStatus = (state, slug) => state.getIn(['mover', 'profile', slug, 'profile', 'status']) || 'UNINIT';

export const getReviewStatus = (state, slug) => state.getIn(['mover', 'profile', slug, 'reviews', 'status']) || 'UNINIT';
export const getReviewData = (state, slug) => state.getIn(['mover', 'profile', slug, 'reviews', 'result']);

