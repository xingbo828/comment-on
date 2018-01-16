import { firestore } from '../../../firebaseClient';

const projectCollectionRef = firestore.collection('projects');

export const PROJECT_MANAGEMENT__SELECT_MOVER = 'PROJECT_MANAGEMENT__SELECT_MOVER';
export const selectMover = (projectId, providerId) => dispatch => {
  dispatch({
    type: PROJECT_MANAGEMENT__SELECT_MOVER,
    projectId,
    providerId
  });
};

export const acceptProvider = (projectId, providerId) => async dispatch => {
    const projectDocRef = projectCollectionRef.doc(projectId);
    const projectDoc = await projectDocRef.get();
    const project = projectDoc.data();
    const updateReceivers = Object.assign({}, project.receivers);
    updateReceivers[providerId].status = 'confirmed';
    return await projectDocRef.update({
      status: 'accept',
      receivers: updateReceivers
    });
};
