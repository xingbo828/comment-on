import localforge from 'localforage';
import omit from 'lodash/omit';

import {
  LOCALSTOREAGE_STEP_INFO_KEY,
  CONFIGURATION_MOVE_LOAD_DATA,
  CONFIGURATION_MOVE_RECEIVED_DATA,
  CONFIGURATION_MOVE_RESET_DATA
} from '../../constants'

const category = 'address';

// ADDRESS
export const localSaveAddresses = async (addresses) => {
  const stepInfo = await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);
  return await localforge.setItem(
    LOCALSTOREAGE_STEP_INFO_KEY,
    Object.assign(stepInfo || {}, omit(addresses, ['status']))
  );
};

export const resetAddresses = () => dispatch => {
  dispatch({
    type: CONFIGURATION_MOVE_RESET_DATA,
    category
  });
}

export const loadAddresses = () => async dispatch => {
  dispatch({
    type: CONFIGURATION_MOVE_LOAD_DATA,
    category
  });
  const stepInfo = await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);
  const addresses = stepInfo && stepInfo.addresses ? stepInfo.addresses : {};
  dispatch({
    type: CONFIGURATION_MOVE_RECEIVED_DATA,
    category,
    data: addresses
  });
};
