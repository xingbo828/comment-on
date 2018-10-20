import localforge from 'localforage';
import moment from 'moment';
import get from 'lodash/get'
import isNull from 'lodash/isNull'
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
        storage: dates.storage,
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
  if(isNull(date)) {
    dispatch({
      type: CONFIGURATION_MOVE_RECEIVED_DATA,
      category,
      data: date
    });
  } else {
    const pickUpDate = date.pickUpDate.map(d => moment(d));
    dispatch({
      type: CONFIGURATION_MOVE_RECEIVED_DATA,
      category,
      data: {
        storage: get(date, 'storage'),
        pickUpDate
      }
    });
  }

};
