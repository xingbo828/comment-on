import createProjectHttpClient from './projectHttpClient';

export const GET_PROJECT_PENDING = 'GET_PROJECT_PENDING';
export const GET_PROJECT_SUCCESS = 'GET_PROJECT_SUCCESS';
export const GET_PROJECT_FAIL = 'GET_PROJECT_FAIL';


export const getProject = projectId => async dispatch => {
  try {
    dispatch({
      type: GET_PROJECT_PENDING
    });
    const projectHttpClient = await createProjectHttpClient();
    const projectData =  await projectHttpClient.getProject(projectId);
    const mappedConfiguration = Object.assign({}, projectData.configuration, {
      addresses: {
        pickUpAddress: {
          lat: projectData.configuration.addresses.pickUpAddress._latitude,
          lng: projectData.configuration.addresses.pickUpAddress._longitude,
        },
        deliveryAddress: {
          lat: projectData.configuration.addresses.deliveryAddress._latitude,
          lng: projectData.configuration.addresses.deliveryAddress._longitude,
        }
      }
    })
    dispatch({
        type: GET_PROJECT_SUCCESS,
        data: Object.assign(projectData, { configuration: mappedConfiguration })
    });
  } catch (error) {
    dispatch({
      type: GET_PROJECT_FAIL,
      error
    });
  }
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
