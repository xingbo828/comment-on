import Immutable from 'immutable';
import { createSelector } from 'reselect';
import { USER_LOGIN, USER_LOGOUT } from './onAuthChangeAction';
import { UPDATE_PROFILE, EMAIL_CONFIRMATION } from './accountAction';

const initState = Immutable.fromJS({
  status: 'UNINIT',
  emailConfirmationVisible: false,
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
        const newProfile = st.get('user').merge(Immutable.fromJS(action.data));
        st.set('user', newProfile);
      });
    case EMAIL_CONFIRMATION:
      return state.withMutations((st) => {
        st.set('emailConfirmationVisible', action.data);
      });

    default:
      return state;
  }
};


// Selectors
export const getUser = (state) => ({ user: state.getIn(['account', 'user'])});
export const getAccount = state => ({ account: state.get('account') });
export const getEmailConfirmationVisible = state => state.getIn(['account', 'emailConfirmationVisible']);

export const isLoggedin = createSelector(
  [ getAccount ], ({ account }) => ({ isLoggedIn: account.get('user').size > 0, user: account.get('user'), loginStatus: account.get('status')})
);
