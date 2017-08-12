import Immutable from 'immutable';
import { createSelector } from 'reselect';
import { UPDATE_BUSINESS_PROFILE } from './businessAction';

const initState = Immutable.fromJS({
  status: 'UNINIT',
  user: {}
});

export default (state = initState, action) => {
  switch (action.type) {
    case UPDATE_BUSINESS_PROFILE:
      return state.withMutations((st) => {
        st.set('business', Immutable.fromJS(action.data));
      });
    default:
      return state;
  }
};
