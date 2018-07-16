import localforge from 'localforage';

import {
  LOCALSTOREAGE_STEP_INFO_KEY,
  CONFIGURATION_MOVE_LOAD_DATA,
  CONFIGURATION_MOVE_RECEIVED_DATA
} from '../../constants'

const category = 'contactInfo';

// ADDRESS
export const localSaveContactInfo = async (contactInfo) => {
  const stepInfo = await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);
  return await localforge.setItem(
    LOCALSTOREAGE_STEP_INFO_KEY,
    Object.assign(stepInfo || {}, { contactInfo })
  );
};


export const loadContactInfo = () => async dispatch => {
  dispatch({
    type: CONFIGURATION_MOVE_LOAD_DATA,
    category
  });
  const stepInfo = await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);
  const contactInfo = stepInfo && stepInfo.contactInfo ? stepInfo.contactInfo : {};
  dispatch({
    type: CONFIGURATION_MOVE_RECEIVED_DATA,
    category,
    data: contactInfo
  });
};
