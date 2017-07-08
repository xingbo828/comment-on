import Immutable from 'immutable';
import { USER_LOGIN, USER_LOGOUT } from './onAuthChangeAction';

const initState = Immutable.fromJS({
  status: 'UNINIT',
  user: {}
});

export default (state = initState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return state.set('user', Immutable.fromJS(action.data)).set('status', 'AUTHENTICATED');
      // return state.withMutations((st) => {
      //   st.set('user', action.data);
      //   st.set('status', 'AUTHENTICATED');
      // });
    case USER_LOGOUT:
      return state.withMutations((st) => {
        st.set('user', Immutable.fromJS({}));
        st.set('status', 'NOT_AUTHENTICATED');
      });
    default:
      return state;
  }
};
