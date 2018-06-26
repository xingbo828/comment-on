import localforge from 'localforage';
import moment from 'moment';
import {
  LOCALSTOREAGE_STEP_INFO_KEY,
  CONFIGURATION_MOVE_LOAD_DATA,
  CONFIGURATION_MOVE_RECEIVED_DATA
} from '../../constants'

const category = 'date';

export const localSaveDate = async dates => {
  const stepInfo = await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);
  return await localforge.setItem(
    LOCALSTOREAGE_STEP_INFO_KEY,
    Object.assign(stepInfo || {}, {
      date: {
        pickUpDate: dates.pickUpDate.map(d => d.format('YYYYMMDD'))
      }
    })
  );
};

export const loadDate = () => async dispatch => {
  dispatch({
    type: CONFIGURATION_MOVE_LOAD_DATA,
    category
  });
  const stepInfo = await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);
  const date = stepInfo && stepInfo.date ? stepInfo.date : null;
  const pickUpDate = date ? date.pickUpDate.map(d => moment(d)): null;
  dispatch({
    type: CONFIGURATION_MOVE_RECEIVED_DATA,
    category,
    data: {
      pickUpDate
    }
  });
};
