import Immutable from 'immutable';
import { createSelector } from 'reselect';
import { USER_LOGIN, USER_LOGOUT } from './onAuthChangeAction';
import { UPDATE_PROFILE } from './profileAction';

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
        st.set('user', Immutable.fromJS(action.data));
      });
    default:
      return state;
  }
};


// Selectors
export const getUser = (state) => ({ user: state.getIn(['account', 'user'])});
export const getAccount = state => ({ account: state.get('account') });


export const isLoggedin = createSelector(
  [ getUser ], ({user}) => ({ isLoggedIn: user.size > 0, user })
);
