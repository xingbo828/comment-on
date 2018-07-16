import localforge from 'localforage';
import moment from 'moment';

import {
  LOCALSTOREAGE_STEP_INFO_KEY,
  CONFIGURATION_MOVE_RECEIVED_DATA
} from '../../constants'

export const deleteStepInfo = async () => {
  return await localforge.removeItem(LOCALSTOREAGE_STEP_INFO_KEY);
}

export const getLocalstorageStepInfo = async () => {
  return await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);
}


// Overview
export const getAdditionalNotes = () => async dispatch => {
  const stepInfo = await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);
  const additionalNotes = stepInfo && (stepInfo.additionalNotes || '');
  dispatch({
    type: CONFIGURATION_MOVE_RECEIVED_DATA,
    category: 'overview.notes',
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
    type: CONFIGURATION_MOVE_RECEIVED_DATA,
    category: 'overview.notes',
    data: additionalNotes
  });
};

 // Project Name
export const getProjectName = () => async dispatch => {
  const stepInfo = await localforge.getItem(LOCALSTOREAGE_STEP_INFO_KEY);
  let projectName = stepInfo && (stepInfo.projectName || '');
  if(projectName === ''){
    projectName = `Move - ${moment().format('YY-M-DD')}`;
    await setProjectName(projectName)(dispatch);
  }
  dispatch({
    type: CONFIGURATION_MOVE_RECEIVED_DATA,
    category: 'overview.projectName',
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
    type: CONFIGURATION_MOVE_RECEIVED_DATA,
    category: 'overview.projectName',
    data: projectName
  });
};
