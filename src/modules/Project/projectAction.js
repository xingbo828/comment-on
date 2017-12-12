import { auth, firestore } from '../../firebaseClient';
import { updateUserProjectIds } from '../Account/accountAction';

const projectCollectionRef = firestore.collection('projects');

export const PROJECT_CREATED = 'PROJECT_CREATED';

export const addProject = (projectType, configuration) => async dispatch => {
  const uid = auth.currentUser.uid;
  const name = auth.currentUser.displayName;
  const project = Object.assign(
    {},
    { type: projectType, configuration, owner: { uid, name } }
  );
  const projectRef = await projectCollectionRef.add(project);
  const projectId = projectRef.id;
  await updateUserProjectIds(projectId, uid)(dispatch);
  return projectId;
};
