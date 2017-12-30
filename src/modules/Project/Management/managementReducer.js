import Immutable from 'immutable';
import {
  GET_MY_PROJECT_PENDING,
  GET_MY_PROJECT_SUCCESS,
  GET_MY_PROJECT_FAIL
} from '../projectAction';

const initMyProjectState = Immutable.fromJS({});

const projectSummary = (state = initMyProjectState, action) => {
  switch (action.type) {
    case GET_MY_PROJECT_PENDING: {
      return state.withMutations(st => {
        st.setIn([action.projectId, 'status'], 'PENDING');
        st.setIn([action.projectId, 'projectData'], null);
      });
    }

    case GET_MY_PROJECT_SUCCESS: {
      return state.withMutations(st => {
        st.setIn([action.projectId, 'status'], 'LOADED');
        st.setIn([action.projectId, 'projectData'], Immutable.fromJS(action.data))
      });
    }

    case GET_MY_PROJECT_FAIL: {
      return state.withMutations(st => {
        st.setIn([action.projectId, 'status'], 'FAILED');
        st.setIn([action.projectId, 'projectData'], null);
      });
    }

    default:
      return state;
  }
};


export default projectSummary;

// Selectors
export const getMyProjectSelector = (state, projectId) => state.getIn(['project', 'management', projectId]) || Immutable.fromJS({
  status: 'UNINIT',
  projectData: null
});
