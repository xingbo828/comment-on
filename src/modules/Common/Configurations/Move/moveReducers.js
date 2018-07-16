import Immutable from 'immutable';

import {
  CONFIGURATION_MOVE_LOAD_DATA,
  CONFIGURATION_MOVE_RECEIVED_DATA,
  CONFIGURATION_MOVE_RESET_DATA
} from '../constants'


const initState = Immutable.fromJS({});

const handleLoadData = ({ category, state }) => {
  return state.setIn([...category.split('.'), 'status'], 'PENDING');
};

const handleReceivedData = ({ category, input, state }) => {
  return state.withMutations(st => {
    st.setIn([...category.split('.'), 'status'], 'LOADED');
    st.setIn([...category.split('.'), 'detail'], Immutable.fromJS(input));
  });
};

const handleResetData = ({ category, state }) => {
  return state.withMutations(st => {
    st.setIn([...category.split('.'), 'status'], 'UNINIT');
  });
};

export default (state = initState, action) => {
  switch (action.type) {

    case CONFIGURATION_MOVE_LOAD_DATA: {
      return handleLoadData({ category: action.category, state })
    }
    case CONFIGURATION_MOVE_RECEIVED_DATA: {
      return handleReceivedData({ category: action.category, input: action.data, state })
    }
    case CONFIGURATION_MOVE_RESET_DATA: {
      return handleResetData({ category: action.category, state })
    }

    default:
      return state;
  }
};


// Selectors
export const getAddresses = state =>
  state.getIn(['configurations', 'move', 'address']);
export const getItems = state =>
  state.getIn(['configurations', 'move', 'items']);
export const getDate = state =>
  state.getIn(['configurations', 'move', 'date']);
export const getLogistics = state =>
  state.getIn(['configurations', 'move', 'logistics']);
export const getOverview = state =>
  state.getIn(['configurations', 'move', 'overview']);
export const getContactInfo = state =>
  state.getIn(['configurations', 'move', 'contactInfo']);
