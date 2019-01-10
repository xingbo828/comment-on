import localforge from 'localforage';
import omit from 'lodash/omit';

import {
  LOCALSTOREAGE_STEP_INFO_KEY,
  CONFIGURATION_MOVE_LOAD_DATA,
  CONFIGURATION_MOVE_RECEIVED_DATA
} from '../../constants'

const category = 'pickUp';

// Logistics
export const localSavePickUp = async (pickUp) => {
  const stepInfo = await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);
  return await localforge.setItem(
    LOCALSTOREAGE_STEP_INFO_KEY,
    Object.assign(stepInfo || {}, { pickUp: omit(pickUp, ['status']) })
  );
};

export const loadPickUp = () => async dispatch => {
  dispatch({
    type: CONFIGURATION_MOVE_LOAD_DATA,
    category
  });
  const stepInfo = await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);
  const pickUp = stepInfo && stepInfo.pickUp ? stepInfo.pickUp : {};
  dispatch({
    type: CONFIGURATION_MOVE_RECEIVED_DATA,
    category,
    data: pickUp
  });
};
