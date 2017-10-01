import Immutable from 'immutable';
import { combineReducers } from 'redux-immutable';
import { GET_ADDRESSES, LOCAL_SAVE_ADDRESS, LOADING_ADDRESSES } from './searchActions';

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

export default combineReducers({
  addressesStep: searchAddressesStep
});


// Selectors
export const getAddresses = (state) => ({ addresses: state.getIn(['business', 'search', 'addressesStep'])});
