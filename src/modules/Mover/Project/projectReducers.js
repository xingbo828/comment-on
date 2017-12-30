import Immutable from 'immutable';
import {
  GET_PROJECT_PENDING,
  GET_PROJECT_SUCCESS,
  GET_PROJECT_FAIL
} from './projectActions';

// Addresses
const initMoverProjectSummaryState = Immutable.fromJS({
  summaryData: null,
  status: 'UNINIT'
});

const projectSummary = (state = initMoverProjectSummaryState, action) => {
  switch (action.type) {
    case GET_PROJECT_PENDING: {
      return state.withMutations(st => {
        st.set('status', 'PENDING');
        st.set('summaryData', null);
      });
    }

    case GET_PROJECT_SUCCESS: {
      return state.withMutations(st => {
        st.set('status', 'LOADED');
        st.set('summaryData', Immutable.fromJS(action.data))
      });
    }

    case GET_PROJECT_FAIL: {
      return state.withMutations(st => {
        st.set('status', 'FAILED');
        st.set('summaryData', null);
      });
    }

    default:
      return state;
  }
};


export default projectSummary;

// Selectors
export const getMoverProjectSummary = (state) => state.getIn(['mover', 'project']);
