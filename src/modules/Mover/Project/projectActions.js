import {
  firestore
} from '../../../firebaseClient';

const projectCollectionRef = firestore.collection('projects');

export const GET_PROJECT_PENDING = 'GET_PROJECT_PENDING';
export const GET_PROJECT_SUCCESS = 'GET_PROJECT_SUCCESS';
export const GET_PROJECT_FAIL = 'GET_PROJECT_FAIL';


const _getOwner = async (uid) => {
  const userDocRef = firestore.collection('users').doc(uid);
  const userDoc = await userDocRef.get();
  if(userDoc.exists) {
    return userDoc.data();
  }
  return Promise.reject(uid);
}

export const getProject = (projectId) => async dispatch => {
  dispatch({
    type: GET_PROJECT_PENDING
  });
  const projectDoc = await projectCollectionRef.doc(projectId).get();
  if(projectDoc.exists) {
    const projectData = await projectDoc.data();
    const owner = await _getOwner(projectData.owner);
    const updatedProjectData = Object.assign(projectData, { owner });
    dispatch({
      type: GET_PROJECT_SUCCESS,
      data: updatedProjectData
    })
  } else {
    dispatch({
      type: GET_PROJECT_FAIL
    })
  }
};

export const declineLead = () => async dispatch => {

};

export const replyToLead = () => async dispatcgh => {

};
