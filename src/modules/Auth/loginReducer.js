import Immutable from 'immutable';
import { LOGIN_SUCCESS, LOGIN_REQUEST } from './loginAction';

const initState = Immutable.fromJS({
  status: 'UNINIT',
  name: ''
});

export default (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return state.withMutations(st => {
        st.set('name', 'Bo');
        st.set('status', 'SUCCESSFUL');
      });
    case LOGIN_REQUEST:
      return state.withMutations(st => {
        st.set('name', '');
        st.set('status', 'PENDING');
      });
    default:
      return state;
  }
};