import localforge from 'localforage';
import omit from 'lodash/omit';
import moment from 'moment';

export const LOCALSTOREAGE_STEP_INFO_KEY = 'steps-info';

export const getLocalstorageStepInfo = async () => {
  return await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);
}

export const deleteStepInfo = async () => {
  return await localforge.removeItem(LOCALSTOREAGE_STEP_INFO_KEY);
}

// ADDRESS
export const GET_ADDRESSES = 'GET_ADDRESSES';

export const LOADING_ADDRESSES = 'LOADING_ADDRESSES';
export const RESET_ADDRESSES = 'RESET_ADDRESSES';
export const localSaveAddresses = async (addresses) => {
  try {
    const stepInfo = await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);
    return await localforge.setItem(
      LOCALSTOREAGE_STEP_INFO_KEY,
      Object.assign(stepInfo || {}, omit(addresses, ['status']))
    );
  } catch (error) {
    console.error(error);
  }
};

export const resetAddresses = () => dispatch => {
  dispatch({
    type: RESET_ADDRESSES
  });
}

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

// ITEMS

export const GET_ITEMS = 'GET_ITEMS';

export const LOADING_ITEMS = 'LOADING_ITEMS';

export const localSaveItems = async (items)  => {
  const stepInfo = await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);
  return await localforge.setItem(
    LOCALSTOREAGE_STEP_INFO_KEY,
    Object.assign(stepInfo || {}, { items: omit(items, ['status']) })
  );
};

export const loadItems = () => async dispatch => {
  dispatch({
    type: LOADING_ITEMS
  });
  const stepInfo = await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);
  const items = stepInfo && stepInfo.items ? stepInfo.items : {};
  dispatch({
    type: GET_ITEMS,
    data: items
  });
};

// MOVING DATE TIME
export const GET_DATE = 'GET_DATE';

export const LOADING_DATE = 'LOADING_DATE';

export const localSaveDate = async date => {
  const stepInfo = await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);
  return await localforge.setItem(
    LOCALSTOREAGE_STEP_INFO_KEY,
    Object.assign(stepInfo || {}, {
      date: {
        pickUpDate: date.pickUpDate.map(d => d.format('YYYYMMDD'))
      }
    })
  );
};

export const loadDate = () => async dispatch => {
  dispatch({
    type: LOADING_DATE
  });
  const stepInfo = await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);
  const date = stepInfo && stepInfo.date ? stepInfo.date : null;
  const pickUpDate = date ? date.pickUpDate.map(d => moment(d)): null;
  dispatch({
    type: GET_DATE,
    data: {
      pickUpDate
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


// Overview
export const SET_ADDITIONAL_NOTES = 'SET_ADDITIONAL_NOTES';
export const GET_ADDITIONAL_NOTES = 'GET_ADDITIONAL_NOTES'

export const getAdditionalNotes = () => async dispatch => {
  const stepInfo = await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);
  const additionalNotes = stepInfo && (stepInfo.additionalNotes || '');
  dispatch({
    type: GET_ADDITIONAL_NOTES,
    data: additionalNotes
  });
};

export const setAdditionalNotes = (additionalNotes) => async dispatch => {
  const stepInfo = await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);
  await localforge.setItem(
    LOCALSTOREAGE_STEP_INFO_KEY,
    Object.assign(stepInfo || {}, { additionalNotes })
  );
  dispatch({
    type: GET_ADDITIONAL_NOTES,
    data: additionalNotes
  });
};

 // Project Name
export const SET_PROJECT_NAME = 'SET_PROJECT_NAME';
export const GET_PROJECT_NAME = 'GET_PROJECT_NAME'

export const getProjectName = () => async dispatch => {
  const stepInfo = await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);
  let projectName = stepInfo && (stepInfo.projectName || '');
  if(projectName === ''){
    projectName = `Move - ${moment().format('YY-M-DD')}`;
    await setProjectName(projectName)(dispatch);
  }
  dispatch({
    type: GET_PROJECT_NAME,
    data: projectName
  });
};

export const setProjectName = (projectName) => async dispatch => {
  const stepInfo = await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);
  await localforge.setItem(
    LOCALSTOREAGE_STEP_INFO_KEY,
    Object.assign(stepInfo || {}, { projectName })
  );
  dispatch({
    type: GET_PROJECT_NAME,
    data: projectName
  });
};
