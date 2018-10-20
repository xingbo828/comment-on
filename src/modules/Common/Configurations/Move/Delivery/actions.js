import localforge from 'localforage';
import omit from 'lodash/omit';

import {
  LOCALSTOREAGE_STEP_INFO_KEY,
  CONFIGURATION_MOVE_LOAD_DATA,
  CONFIGURATION_MOVE_RECEIVED_DATA
} from '../../constants'

const category = 'delivery';

// Logistics
export const localSaveDelivery = async (delivery) => {
  const stepInfo = await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);
  return await localforge.setItem(
    LOCALSTOREAGE_STEP_INFO_KEY,
    Object.assign(stepInfo || {}, { delivery: omit(delivery, ['status']) })
  );
};

export const loadDelivery = () => async dispatch => {
  dispatch({
    type: CONFIGURATION_MOVE_LOAD_DATA,
    category
  });
  const stepInfo = await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);
  const delivery = stepInfo && stepInfo.delivery ? stepInfo.delivery : {};
  dispatch({
    type: CONFIGURATION_MOVE_RECEIVED_DATA,
    category,
    data: delivery
  });
};
