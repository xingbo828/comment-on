import {
  auth,
  firestore
} from '../../firebaseClient';
import { updateUserProjectIds } from '../Account/accountAction';

const projectCollectionRef = firestore.collection('projects');


export const PROJECT_CREATED = 'PROJECT_CREATED';

export const addProject = (configuration) => async dispatch => {
    const uid = auth.currentUser.uid;
    const project = Object.assign({}, { configuration, owner: uid });
    const projectRef = await projectCollectionRef.add(project);
    const projectId = projectRef.id;
    await updateUserProjectIds(projectId, uid)(dispatch);
    return projectId;
};
