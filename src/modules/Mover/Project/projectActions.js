import { firestore } from '../../../firebaseClient';
import createProjectHttpClient from './projectHttpClient';

const projectCollectionRef = firestore.collection('projects');

export const GET_PROJECT_PENDING = 'GET_PROJECT_PENDING';
export const GET_PROJECT_SUCCESS = 'GET_PROJECT_SUCCESS';
export const GET_PROJECT_FAIL = 'GET_PROJECT_FAIL';

const _getOwner = async uid => {
  const userDocRef = firestore.collection('users').doc(uid);
  const userDoc = await userDocRef.get();
  if (userDoc.exists) {
    return userDoc.data();
  }
  return Promise.reject(uid);
};

export const getProject = projectId => async dispatch => {
  dispatch({
    type: GET_PROJECT_PENDING
  });
  projectCollectionRef.doc(projectId).onSnapshot(async (projectDoc) => {
    if(!projectDoc.exists) {
      return dispatch({
        type: GET_PROJECT_FAIL
      });
    }
    try {
      const projectData = projectDoc.data();
      const owner = await _getOwner(projectData.owner);
      dispatch({
            type: GET_PROJECT_SUCCESS,
            data: Object.assign(projectData, { owner })
      });
    } catch(error) {
      dispatch({
            type: GET_PROJECT_FAIL
      });
    }
  });
};

export const declineLead = (projectId) => async dispatch => {
  const projectHttpClient = await createProjectHttpClient();
  return await projectHttpClient.declineLead(projectId);
};

export const replyToLead = ({
  projectId,
  estimatedPrice,
  notes
}) => async dispatch => {
  const projectHttpClient = await createProjectHttpClient();
  return await projectHttpClient.replyToLead(projectId, {
    estimatedPrice,
    notes
  });
};
