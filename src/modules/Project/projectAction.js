import { auth, firestore } from '../../firebaseClient';
import { updateUserProjects } from '../Account/accountAction';

const projectCollectionRef = firestore.collection('projects');

export const PROJECT_CREATED = 'PROJECT_CREATED';

export const addProject = (projectType, configuration) => async dispatch => {
  const uid = auth.currentUser.uid;
  const project = Object.assign(
    {},
    { type: projectType, configuration, owner: uid }
  );
  const projectRef = await projectCollectionRef.add(project);
  const projectId = projectRef.id;
  await updateUserProjects(projectRef)(dispatch);
  return projectId;
};

export const GET_MY_PROJECT_PENDING = 'GET_MY_PROJECT_PENDING';
export const GET_MY_PROJECT_SUCCESS = 'GET_MY_PROJECT_SUCCESS';
export const GET_MY_PROJECT_FAIL = 'GET_MY_PROJECT_FAIL';

export const getMyProject = (projectId) => dispatch => {
  dispatch({
    type: GET_MY_PROJECT_PENDING,
    projectId
  });
  projectCollectionRef.doc(projectId).onSnapshot(async (projectDoc) => {
    const project = await projectDoc.data();
    const receiversPromises = Object.values(project.receivers || []).map(async receiver => {
      const resolvedProvider = await receiver.provider.get();
      return Object.assign({}, receiver, {
        provider: Object.assign(resolvedProvider.data(), { id: resolvedProvider.id })
      });
    });
    const receivers = await Promise.all(receiversPromises);
    const resolvedProject = Object.assign(project, {
      receivers
    });
    dispatch({
      type: GET_MY_PROJECT_SUCCESS,
      data: resolvedProject,
      projectId
    });
  });
};
