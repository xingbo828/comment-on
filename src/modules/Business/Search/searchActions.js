import localforge from 'localforage';
import omit from 'lodash/omit';

export const LOCALSTOREAGE_STEP_INFO_KEY = 'steps-info';

export const LOCAL_SAVE_ADDRESS = 'LOCAL_SAVE_ADDRESS';

export const GET_ADDRESSES = 'GET_ADDRESSES';

export const LOADING_ADDRESSES = 'LOADING_ADDRESSES';

export const localSaveAddresses = (addresses) => (dispatch) => {
  localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY)
  .then(stepInfo => {
    localforge.setItem(LOCALSTOREAGE_STEP_INFO_KEY, Object.assign(stepInfo || {}, { addresses: omit(addresses, ['status']) }));
  }).then(() => {
    dispatch({
      type: LOCAL_SAVE_ADDRESS,
      data: addresses
    });
  });
};

export const loadAddresses = () => (dispatch) => {
  dispatch({
    type: LOADING_ADDRESSES
  });
  localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY)
  .then(stepInfo => {
    const addresses = (stepInfo && stepInfo.addresses) ? stepInfo.addresses : {};
    dispatch({
      type: GET_ADDRESSES,
      data: addresses
    });
  })
}
