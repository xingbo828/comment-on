import Immutable from 'immutable';
import { combineReducers } from 'redux-immutable';
import {
  GET_ADDRESSES,
  LOCAL_SAVE_ADDRESS,
  LOADING_ADDRESSES,
  GET_VEHICLE,
  LOCAL_SAVE_VEHICLE,
  LOADING_VEHICLE,
  LOCAL_SAVE_DATE_TIME,
  GET_DATE_TIME,
  LOADING_DATE_TIME,
  LOADING_LOGISTICS,
  LOCAL_SAVE_LOGISTICS,
  GET_LOGISTICS,
  GET_SEARCH_RESULT,
  SEARCH_BUSINESS
} from './searchActions';


// Addresses
const initAddressesState = Immutable.fromJS({
  homeAddress: null,
  destAddress: null,
  status: 'UNINIT'
});

const searchAddressesStep = (state = initAddressesState, action) => {
  switch (action.type) {
    case LOCAL_SAVE_ADDRESS: {
      return state.withMutations((st) => {
        st.set('homeAddress', action.data.homeAddress);
        st.set('destAddress', action.data.destAddress);
      });
    }

    case GET_ADDRESSES: {
      return state.withMutations((st) => {
        st.set('homeAddress', action.data.homeAddress);
        st.set('destAddress', action.data.destAddress);
        st.set('status', 'LOADED');
      });
    }

    case LOADING_ADDRESSES: {
      return state.withMutations((st) => {
        st.set('status', 'PENDING');
      });
    }

    default:
      return state;
  }
};

// Vehicle
const initVehicleState = Immutable.fromJS({
  vehicle: null,
  status: 'UNINIT'
});

const searchVehicleStep = (state = initVehicleState, action) => {
  switch (action.type) {
    case LOCAL_SAVE_VEHICLE: {
      return state.withMutations((st) => {
        st.set('vehicle', action.data.vehicle);
      });
    }

    case GET_VEHICLE: {
      return state.withMutations((st) => {
        st.set('vehicle', action.data.vehicle);
        st.set('status', 'LOADED');
      });
    }

    case LOADING_VEHICLE: {
      return state.withMutations((st) => {
        st.set('status', 'PENDING');
      });
    }

    default:
      return state;
  }
};


// Date time
const initDateTimeState = Immutable.fromJS({
  dateTime: null,
  status: 'UNINIT'
});

const searchDateTimeStep = (state = initDateTimeState, action) => {
  switch (action.type) {
    case LOCAL_SAVE_DATE_TIME: {
      return state.withMutations((st) => {
        st.set('dateTime', action.data);
      });
    }

    case GET_DATE_TIME: {
      return state.withMutations((st) => {
        st.set('dateTime', action.data);
        st.set('status', 'LOADED');
      });
    }

    case LOADING_DATE_TIME: {
      return state.withMutations((st) => {
        st.set('status', 'PENDING');
      });
    }

    default:
      return state;
  }
};

// Logistics
const initLogisticsState = Immutable.fromJS({
  havePiano: null,
  ableToAssist: null,
  status: 'UNINIT'
});

const searchLogisticsStep = (state = initLogisticsState, action) => {
  switch (action.type) {
    case LOCAL_SAVE_LOGISTICS: {
      return state.withMutations((st) => {
        st.set('havePiano', action.data.havePiano);
        st.set('ableToAssist', action.data.ableToAssist);
      });
    }

    case GET_LOGISTICS: {
      return state.withMutations((st) => {
        st.set('havePiano', action.data.havePiano);
        st.set('ableToAssist', action.data.ableToAssist);
        st.set('status', 'LOADED');
      });
    }

    case LOADING_LOGISTICS: {
      return state.withMutations((st) => {
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
      return state.withMutations((st) => {
        st.set('result', Immutable.fromJS(action.data));
        st.set('status', 'LOADED');
      });
    }

    case SEARCH_BUSINESS: {
      return state.withMutations((st) => {
        st.set('status', 'PENDING');
      });
    }

    default:
      return state;
  }
};


export default combineReducers({
  addressesStep: searchAddressesStep,
  vehicleStep: searchVehicleStep,
  dateTimeStep: searchDateTimeStep,
  logisticsStep: searchLogisticsStep,
  searchResult: searchResult
});


// Selectors
export const getAddresses = (state) => state.getIn(['business', 'search', 'addressesStep']);
export const getVehicle = (state) => state.getIn(['business', 'search', 'vehicleStep']);
export const getDateTime = (state) => state.getIn(['business', 'search', 'dateTimeStep']);
export const getLogistics = (state) => state.getIn(['business', 'search', 'logisticsStep']);
export const getSearchResult = (state) => state.getIn(['business', 'search', 'searchResult']);
