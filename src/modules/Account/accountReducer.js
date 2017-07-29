import Immutable from 'immutable';
import { createSelector } from 'reselect';
import { USER_LOGIN, USER_LOGOUT } from './onAuthChangeAction';
import { UPDATE_PROFILE, UPDATE_PROFILE_PICTURE } from './accountAction';

const initState = Immutable.fromJS({
  status: 'UNINIT',
  user: {}
});

export default (state = initState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return state.withMutations((st) => {
        st.set('user', Immutable.fromJS(action.data));
        st.set('status', 'AUTHENTICATED');
      });
    case USER_LOGOUT:
      return state.withMutations((st) => {
        st.set('user', Immutable.fromJS({}));
        st.set('status', 'NOT_AUTHENTICATED');
      });
    case UPDATE_PROFILE:
      return state.withMutations((st) => {
        action.data.hasProfile = true;
        st.set('user', Immutable.fromJS(action.data));
      });
    case UPDATE_PROFILE_PICTURE:
      return state.withMutations((st) => {
        st.setIn(['user', 'photoURL'], action.data);
      });
    default:
      return state;
  }
};


// Selectors
export const getUser = (state) => ({ user: state.getIn(['account', 'user'])});
export const getAccount = state => ({ account: state.get('account') });


export const isLoggedin = createSelector(
  [ getAccount ], ({ account }) => ({ isLoggedIn: account.get('user').size > 0, user: account.get('user'), loginStatus: account.get('status')})
);
