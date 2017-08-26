import Immutable from 'immutable';
import { combineReducers } from 'redux-immutable';
// import { createSelector } from 'reselect';
import { SEARCH_BUSINESS } from './businessAction';



const initSearchResultState = Immutable.fromJS({
  status: 'UNINIT',
  result: []
});

const search = (state = initSearchResultState, action) => {
  switch (action.type) {
    case SEARCH_BUSINESS: {
      return state.withMutations((st) => {
        st.set('status', 'SUCCESS');
        st.set('result', Immutable.fromJS(action.data));
      });
    }

    default:
      return state;
  }
};

// Selectors
export const getSearchResult = (state) => ({ search: state.getIn(['business', 'search'])});

export default combineReducers({
  search
});
