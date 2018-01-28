import createProjectHttpClient from './projectHttpClient';

export const GET_PROJECT_PENDING = 'GET_PROJECT_PENDING';
export const GET_PROJECT_SUCCESS = 'GET_PROJECT_SUCCESS';
export const GET_PROJECT_FAIL = 'GET_PROJECT_FAIL';


export const getProject = projectId => async dispatch => {
  // try {
    dispatch({
      type: GET_PROJECT_PENDING
    });
    const projectHttpClient = await createProjectHttpClient();
    const projectData =  await projectHttpClient.getProject(projectId);
    dispatch({
        type: GET_PROJECT_SUCCESS,
        data: projectData
    });
  // } catch (error) {
  //   dispatch({
  //     type: GET_PROJECT_FAIL,
  //     error
  //   });
  // }
};

export const declineLead = (projectId) => async dispatch => {
  const projectHttpClient = await createProjectHttpClient();
  const result = await projectHttpClient.declineLead(projectId);
  getProject(projectId)(dispatch);
  return result;
};

export const replyToLead = ({
  projectId,
  estimatedPrice,
  notes
}) => async dispatch => {
  const projectHttpClient = await createProjectHttpClient();
  const result = await projectHttpClient.replyToLead(projectId, {
    estimatedPrice,
    notes
  });
  getProject(projectId)(dispatch);
  return result;
};
