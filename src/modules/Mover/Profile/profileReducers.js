import Immutable from 'immutable';

import {
  LOADED_MOVER_PROFILE,
  LOADING_MOVER_PROFILE
} from '../moverAction';

const initProfileState = Immutable.fromJS({
  status: 'UNINIT',
  profile: null
});

const profile = (state = initProfileState, action) => {
  switch (action.type) {
    case LOADED_MOVER_PROFILE: {
      return state.withMutations((st) => {
        // formatting
        const profile = Immutable.fromJS(action.data.profile).withMutations((pr) => {
          pr.set('businessServiceArea', Immutable.fromJS((Object.values(action.data.profile.businessServiceArea))));
          pr.set('businessHour', Immutable.fromJS((Object.values(action.data.profile.businessHour))));
        });
        st.set('profile', profile);
        st.set('status', 'LOADED');
      });
    }

    case LOADING_MOVER_PROFILE: {
      return state.withMutations((st) => {
        st.set('status', 'PENDING');
        st.set('profile', null);
      });
    }

    default:
      return state;
  }
};

export default profile;


// Selectors
export const getProfile = (state, moverId) => state.getIn(['mover', 'profile']);
