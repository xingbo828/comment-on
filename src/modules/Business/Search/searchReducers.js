import Immutable from 'immutable';
import { combineReducers } from 'redux-immutable';
import {
  GET_ADDRESSES,
  LOADING_ADDRESSES,
  RESET_ADDRESSES,
  GET_ITEMS,
  LOADING_ITEMS,
  GET_DATE_TIME,
  LOADING_DATE_TIME,
  LOADING_LOGISTICS,
  GET_LOGISTICS,
  GET_SEARCH_RESULT,
  SEARCH_BUSINESS
} from './searchActions';

// Addresses
const initAddressesState = Immutable.fromJS({
  addresses: null,
  status: 'UNINIT'
});

const searchAddressesStep = (state = initAddressesState, action) => {
  switch (action.type) {
    case GET_ADDRESSES: {
      return state.withMutations(st => {
        st.set('addresses', Immutable.fromJS(action.data));
        st.set('status', 'LOADED');
      });
    }

    case RESET_ADDRESSES: {
      return state.withMutations(st => {
        st.set('status', 'UNINIT');
        st.set('addresses', null)
      });
    }

    case LOADING_ADDRESSES: {
      return state.withMutations(st => {
        st.set('status', 'PENDING');
        st.set('addresses', null)
      });
    }

    default:
      return state;
  }
};

// Items
const initItemsState = Immutable.fromJS({
  speciality: {},
  large: {},
  medium: {},
  status: 'UNINIT'
});

const searchItemsStep = (state = initItemsState, action) => {
  switch (action.type) {
    case GET_ITEMS: {
      return state.withMutations(st => {
        st.set('speciality', action.data.speciality || {});
        st.set('large', action.data.large || {});
        st.set('medium', action.data.medium || {});
        st.set('status', 'LOADED');
      });
    }

    case LOADING_ITEMS: {
      return state.withMutations(st => {
        st.set('status', 'PENDING');
      });
    }

    default:
      return state;
  }
};

// Date time
const initDateTimeState = Immutable.fromJS({
  pickUpDate: null,
  pickUpTime: null,
  deliveryDate: null,
  status: 'UNINIT'
});

const searchDateTimeStep = (state = initDateTimeState, action) => {
  switch (action.type) {
    case GET_DATE_TIME: {
      return state.withMutations(st => {
        st.set('pickUpDate', action.data.pickUpDate);
        st.set('pickUpTime', action.data.pickUpTime);
        st.set('deliveryDate', action.data.deliveryDate);
        st.set('status', 'LOADED');
      });
    }

    case LOADING_DATE_TIME: {
      return state.withMutations(st => {
        st.set('status', 'PENDING');
      });
    }

    default:
      return state;
  }
};

// Logistics
const initLogisticsState = Immutable.fromJS({
  deliveryAccess: null,
  ableToAssist: null,
  residenceType: null,
  status: 'UNINIT'
});

const searchLogisticsStep = (state = initLogisticsState, action) => {
  switch (action.type) {
    case GET_LOGISTICS: {
      return state.withMutations(st => {
        st.set('residenceType', action.data.residenceType);
        st.set('deliveryAccess', action.data.deliveryAccess);
        st.set('ableToAssist', action.data.ableToAssist);
        st.set('status', 'LOADED');
      });
    }

    case LOADING_LOGISTICS: {
      return state.withMutations(st => {
        st.set('status', 'PENDING');
      });
    }

    default:
      return state;
  }
};

// Search Results
const initResultState = Immutable.fromJS({
  result: [],
  status: 'UNINIT'
});

const searchResult = (state = initResultState, action) => {
  switch (action.type) {
    case GET_SEARCH_RESULT: {
      return state.withMutations(st => {
        st.set('result', Immutable.fromJS(action.data));
        st.set('status', 'LOADED');
      });
    }

    case SEARCH_BUSINESS: {
      return state.withMutations(st => {
        st.set('status', 'PENDING');
      });
    }

    default:
      return state;
  }
};

export default combineReducers({
  addressesStep: searchAddressesStep,
  itemsStep: searchItemsStep,
  dateTimeStep: searchDateTimeStep,
  logisticsStep: searchLogisticsStep,
  searchResult: searchResult
});

// Selectors
export const getAddresses = state =>
  state.getIn(['business', 'search', 'addressesStep']);
export const getItems = state =>
  state.getIn(['business', 'search', 'itemsStep']);
export const getDateTime = state =>
  state.getIn(['business', 'search', 'dateTimeStep']);
export const getLogistics = state =>
  state.getIn(['business', 'search', 'logisticsStep']);
export const getSearchResult = state =>
  state.getIn(['business', 'search', 'searchResult']);
