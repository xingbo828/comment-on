import localforge from 'localforage';
import omit from 'lodash/omit';

import {
  LOCALSTOREAGE_STEP_INFO_KEY,
  CONFIGURATION_MOVE_LOAD_DATA,
  CONFIGURATION_MOVE_RECEIVED_DATA
} from '../../constants'

const category = 'logistics';

// Logistics
export const localSaveLogistics = async (logistics) => {
  const stepInfo = await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);
  return await localforge.setItem(
    LOCALSTOREAGE_STEP_INFO_KEY,
    Object.assign(stepInfo || {}, { logistics: omit(logistics, ['status']) })
  );
};

export const loadLogistics = () => async dispatch => {
  dispatch({
    type: CONFIGURATION_MOVE_LOAD_DATA,
    category
  });
  const stepInfo = await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);
  const logistics = stepInfo && stepInfo.logistics ? stepInfo.logistics : {};
  dispatch({
    type: CONFIGURATION_MOVE_RECEIVED_DATA,
    category,
    data: logistics
  });
};
