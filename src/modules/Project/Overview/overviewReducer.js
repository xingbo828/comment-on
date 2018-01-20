import Immutable from 'immutable';
import {
  GET_MY_PROJECTS_PENDING,
  GET_MY_PROJECTS_SUCCESS,
  GET_MY_PROJECTS_FAIL
} from '../projectAction';

const initMyProjectsState = Immutable.fromJS({
  status: 'UNINIT',
  myProjectsData: null
});

export default (state = initMyProjectsState, action) => {
  switch (action.type) {
    case GET_MY_PROJECTS_PENDING: {
      return state.withMutations(st => {
        st.set('status', 'PENDING');
        st.set('myProjectsData', null);
      });
    }

    case GET_MY_PROJECTS_SUCCESS: {
      return state.withMutations(st => {
        st.set('status', 'LOADED');
        st.set('myProjectsData', action.data);
      });
    }

    case GET_MY_PROJECTS_FAIL: {
      return state.withMutations(st => {
        st.set('status', 'FAILED');
        st.set('myProjectsData', null);
      });
    }

    default:
      return state;
  }
};


// Selectors
export const getMyProjectsSelector = (state) => state.getIn(['project', 'overview']);
