import Immutable from 'immutable';
import { combineReducers } from 'redux-immutable';
import {
  GET_ADDRESSES,
  LOADING_ADDRESSES,
  RESET_ADDRESSES,
  GET_ITEMS,
  LOADING_ITEMS,
  GET_DATE,
  LOADING_DATE,
  LOADING_LOGISTICS,
  GET_LOGISTICS,
  GET_ADDITIONAL_NOTES,
  SET_ADDITIONAL_NOTES,
  GET_PROJECT_NAME,
  SET_PROJECT_NAME
} from './moveActions';

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
  specialCare: {},
  appliances: {},
  decore: {},
  otherItems: "",
  status: 'UNINIT'
});

const searchItemsStep = (state = initItemsState, action) => {
  switch (action.type) {
    case GET_ITEMS: {
      console.log(action)
      return state.withMutations(st => {
        st.set('specialCare', action.data.specialCare || {});
        st.set('appliances', action.data.appliances || {});
        st.set('decore', action.data.decore || {});
        st.set('otherItems', action.data.otherItems || "");
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
const initDateState = Immutable.fromJS({
  pickUpDate: null,
  status: 'UNINIT'
});

const searchDateStep = (state = initDateState, action) => {
  switch (action.type) {
    case GET_DATE: {
      return state.withMutations(st => {
        st.set('pickUpDate', action.data.pickUpDate);
        st.set('status', 'LOADED');
      });
    }

    case LOADING_DATE: {
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

// Overview
const initOverviewState = Immutable.fromJS({
  additionalNotes: '',
  projectName: ''
});

const searchOverviewStep = (state = initOverviewState, action) => {
  switch (action.type) {
    case GET_ADDITIONAL_NOTES:
    case SET_ADDITIONAL_NOTES: {
      return state.withMutations(st => {
        st.set('additionalNotes', action.data || '');
      });
    }

    case GET_PROJECT_NAME:
    case SET_PROJECT_NAME: {
      return state.withMutations(st => {
        st.set('projectName', action.data || '');
      });
    }


    default:
      return state;
  }
};


export default combineReducers({
  addressesStep: searchAddressesStep,
  itemsStep: searchItemsStep,
  dateStep: searchDateStep,
  logisticsStep: searchLogisticsStep,
  overviewStep: searchOverviewStep
});

// Selectors
export const getAddresses = state =>
  state.getIn(['project', 'configurations', 'move', 'addressesStep']);
export const getItems = state =>
  state.getIn(['project', 'configurations', 'move', 'itemsStep']);
export const getDate = state =>
  state.getIn(['project', 'configurations', 'move', 'dateStep']);
export const getLogistics = state =>
  state.getIn(['project', 'configurations', 'move', 'logisticsStep']);
export const getOverview = state =>
  state.getIn(['project', 'configurations', 'move', 'overviewStep']);
