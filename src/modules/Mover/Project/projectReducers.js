import Immutable from 'immutable';
import { combineReducers } from 'redux-immutable';
import {
  GET_PROJECT_PENDING,
  GET_PROJECT_SUCCESS,
  GET_PROJECT_FAIL
} from './projectActions';

// Addresses
const initMoverProjectOverviewState = Immutable.fromJS({
  overviewData: null,
  status: 'UNINIT'
});

const overview = (state = initMoverProjectOverviewState, action) => {
  switch (action.type) {
    case GET_PROJECT_PENDING: {
      return state.withMutations(st => {
        st.set('status', 'PENDING');
        st.set('overviewData', null);
      });
    }

    case GET_PROJECT_SUCCESS: {
      return state.withMutations(st => {
        st.set('status', 'LOADED');
        st.set('overviewData', Immutable.fromJS(action.data))
      });
    }

    case GET_PROJECT_FAIL: {
      return state.withMutations(st => {
        st.set('status', 'FAILED');
        st.set('overviewData', null);
      });
    }

    default:
      return state;
  }
};


export default combineReducers({
  overview
});

// Selectors
export const getMoverProjectOverview = (state) => state.getIn(['mover', 'project', 'overview']);
