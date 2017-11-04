import localforge from 'localforage';
import omit from 'lodash/omit';
import moment from 'moment';

export const LOCALSTOREAGE_STEP_INFO_KEY = 'steps-info';

export const getLocalStorageStepInfo = async () => {
  const stepInfo = await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);

  return {
    origin: stepInfo.addresses.homeAddress,
    destination: stepInfo.addresses.destAddress,
    dateTime: stepInfo.dateTime,
    vehicle: stepInfo.vehicle.vehicle
  };
};

// ADDRESS

export const GET_ADDRESSES = 'GET_ADDRESSES';

export const LOADING_ADDRESSES = 'LOADING_ADDRESSES';

export const localSaveAddresses = async (addresses) => {
  try {
    const stepInfo = await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);
    return await localforge.setItem(
      LOCALSTOREAGE_STEP_INFO_KEY,
      Object.assign(stepInfo || {}, { addresses: omit(addresses, ['status']) })
    );
  } catch (error) {
    console.error(error);
  }
};

export const loadAddresses = () => async dispatch => {
  dispatch({
    type: LOADING_ADDRESSES
  });
  const stepInfo = await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);
  const addresses = stepInfo && stepInfo.addresses ? stepInfo.addresses : {};
  dispatch({
    type: GET_ADDRESSES,
    data: addresses
  });
};

// VEHICLE

export const GET_VEHICLE = 'GET_VEHICLE';

export const LOADING_VEHICLE = 'LOADING_VEHICLE';

export const localSaveVehicle = async (vehicle)  => {
  const stepInfo = await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);
  return await localforge.setItem(
    LOCALSTOREAGE_STEP_INFO_KEY,
    Object.assign(stepInfo || {}, { vehicle: omit(vehicle, ['status']) })
  );
};

export const loadVehicle = () => async dispatch => {
  dispatch({
    type: LOADING_VEHICLE
  });
  const stepInfo = await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);
  const vehicle = stepInfo && stepInfo.vehicle ? stepInfo.vehicle : {};
  dispatch({
    type: GET_VEHICLE,
    data: vehicle
  });
};

// MOVING DATE TIME
export const GET_DATE_TIME = 'GET_DATE_TIME';

export const LOADING_DATE_TIME = 'LOADING_DATE_TIME';

export const localSaveDateTime = async dateTime => {
  const stepInfo = await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);
  return await localforge.setItem(
    LOCALSTOREAGE_STEP_INFO_KEY,
    Object.assign(stepInfo || {}, {
      dateTime: {
        date: dateTime.date.format('YYYYMMDD'),
        time: dateTime.time
      }
    })
  );
};

export const loadDateTime = () => async dispatch => {
  dispatch({
    type: LOADING_DATE_TIME
  });
  const stepInfo = await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);
  const dateTime = stepInfo && stepInfo.dateTime ? stepInfo.dateTime : null;
  dispatch({
    type: GET_DATE_TIME,
    data: {
      date: moment(dateTime.date),
      time: dateTime.time
    }
  });
};

// Logistics

export const GET_LOGISTICS = 'GET_LOGISTICS';

export const LOADING_LOGISTICS = 'LOADING_LOGISTICS';

export const localSaveLogistics = async (logistics) => {
  const stepInfo = await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);
  return await localforge.setItem(
    LOCALSTOREAGE_STEP_INFO_KEY,
    Object.assign(stepInfo || {}, { logistics: omit(logistics, ['status']) })
  );
};

export const loadLogistics = () => async dispatch => {
  dispatch({
    type: LOADING_LOGISTICS
  });
  const stepInfo = await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);
  const logistics = stepInfo && stepInfo.logistics ? stepInfo.logistics : {};
  dispatch({
    type: GET_LOGISTICS,
    data: logistics
  });
};

// Search result
export const GET_SEARCH_RESULT = 'GET_SEARCH_RESULT';
export const SEARCH_BUSINESS = 'SEARCH_BUSINESS';

export const searchBusiness = ({
  origin,
  destination,
  dateTime,
  vehicle
}) => async dispatch => {
  dispatch({
    type: SEARCH_BUSINESS
  });
  const API = `https://us-central1-comment-on-85597.cloudfunctions.net/business?origin=${origin}&destination=${destination}&dateTime=${dateTime}&vehicle=${vehicle}`;
  const searchResult = await fetch(API).then(res => res.json());
  return dispatch({
    type: GET_SEARCH_RESULT,
    data: searchResult
  });
};
