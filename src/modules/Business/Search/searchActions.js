import localforge from 'localforage';
import omit from 'lodash/omit';

export const LOCALSTOREAGE_STEP_INFO_KEY = 'steps-info';


// ADDRESS
export const LOCAL_SAVE_ADDRESS = 'LOCAL_SAVE_ADDRESS';

export const GET_ADDRESSES = 'GET_ADDRESSES';

export const LOADING_ADDRESSES = 'LOADING_ADDRESSES';

export const localSaveAddresses = (addresses) => async (dispatch) => {
  const stepInfo = await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);
  await localforge.setItem(LOCALSTOREAGE_STEP_INFO_KEY, Object.assign(stepInfo || {}, { addresses: omit(addresses, ['status']) }));
  dispatch({
    type: LOCAL_SAVE_ADDRESS,
    data: addresses
  });
};

export const loadAddresses = () => async (dispatch) => {
  dispatch({
    type: LOADING_ADDRESSES
  });
  const stepInfo = await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);
  const addresses = (stepInfo && stepInfo.addresses) ? stepInfo.addresses : {};
  dispatch({
    type: GET_ADDRESSES,
    data: addresses
  });
}


// MOVING DATE TIME
export const LOCAL_SAVE_DATE_TIME = 'LOCAL_SAVE_DATE_TIME';

export const GET_DATE_TIME = 'GET_DATE_TIME';

export const LOADING_DATE_TIME = 'LOADING_DATE_TIME';

export const localSaveDateTime = (dateTime) => async (dispatch) => {
  const stepInfo = await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY)
  await localforge.setItem(LOCALSTOREAGE_STEP_INFO_KEY, Object.assign(stepInfo || {}, { dateTime }));
  dispatch({
    type: LOCAL_SAVE_DATE_TIME,
    data: dateTime
  });
};

export const loadDateTime = () => async (dispatch) => {
  dispatch({
    type: LOADING_DATE_TIME
  });
  const stepInfo = await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);
  const dateTime = (stepInfo && stepInfo.dateTime) ? stepInfo.dateTime : null;
  dispatch({
    type: GET_DATE_TIME,
    data: dateTime
  });
}


