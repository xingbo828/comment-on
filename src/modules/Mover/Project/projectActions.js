import {
  firestore
} from '../../../firebaseClient';

const projectCollectionRef = firestore.collection('projects');

export const GET_PROJECT_PENDING = 'GET_PROJECT_PENDING';
export const GET_PROJECT_SUCCESS = 'GET_PROJECT_SUCCESS';
export const GET_PROJECT_FAIL = 'GET_PROJECT_FAIL';

export const getProject = (projectId) => async dispatch => {
  dispatch({
    type: GET_PROJECT_PENDING
  });
  const projectDoc = await projectCollectionRef.doc(projectId).get();
  if(projectDoc.exists) {
    const projectData = await projectDoc.data();
    dispatch({
      type: GET_PROJECT_SUCCESS,
      data: projectData
    })
  } else {
    dispatch({
      type: GET_PROJECT_FAIL
    })
  }
};
