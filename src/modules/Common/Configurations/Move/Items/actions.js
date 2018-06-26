import omit from 'lodash/omit';
import localforge from 'localforage';
// ITEMS
import {
  LOCALSTOREAGE_STEP_INFO_KEY,
  CONFIGURATION_MOVE_LOAD_DATA,
  CONFIGURATION_MOVE_RECEIVED_DATA
} from '../../constants'

const category = 'items';

export const localSaveItems = async (items)  => {
  const stepInfo = await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);
  return await localforge.setItem(
    LOCALSTOREAGE_STEP_INFO_KEY,
    Object.assign(stepInfo || {}, { items: omit(items, ['status']) })
  );
};

export const loadItems = () => async dispatch => {
  dispatch({
    type: CONFIGURATION_MOVE_LOAD_DATA,
    category
  });
  const stepInfo = await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);
  const items = stepInfo && stepInfo.items ? stepInfo.items : {};
  dispatch({
    type: CONFIGURATION_MOVE_RECEIVED_DATA,
    category,
    data: items
  });
};
