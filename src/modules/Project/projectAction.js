import { auth, firestore, firebaseInstance } from '../../firebaseClient';
import { updateUserProjects } from '../Account/accountAction';

const projectCollectionRef = firestore.collection('projects');

export const PROJECT_CREATED = 'PROJECT_CREATED';

export const addProject = (projectCategory, configuration) => async dispatch => {
  const uid = auth.currentUser.uid;
  let configurationWithGeoPoint;
  if(configuration.addresses) {
    configurationWithGeoPoint = Object.assign({}, configuration, {
      addresses: {
        formattedPickUpAddress: configuration.addresses.pickUpAddress.formattedAddress,
        formattedDeliveryAddress: configuration.addresses.deliveryAddress.formattedAddress,
        pickUpAddress: new firebaseInstance.firestore.GeoPoint(configuration.addresses.pickUpAddress.lat, configuration.addresses.pickUpAddress.lng),
        deliveryAddress:  new firebaseInstance.firestore.GeoPoint(configuration.addresses.deliveryAddress.lat, configuration.addresses.deliveryAddress.lng),
      }
    });
  } else {
    configurationWithGeoPoint = configuration
  }
  const project = Object.assign(
      {},
      { category: projectCategory, configuration: configurationWithGeoPoint, owner: uid, type: 'BROADCAST' }
    );

  const projectRef = await projectCollectionRef.add(project);
  const projectId = projectRef.id;
  await updateUserProjects(projectRef)(dispatch);
  return projectId;
};

export const addDirectProject = (projectCategory, configuration, providerId) => async dispatch => {
  let configurationWithGeoPoint;
  if(configuration.addresses) {
    configurationWithGeoPoint = Object.assign({}, configuration, {
      addresses: {
        formattedPickUpAddress: configuration.addresses.pickUpAddress.formattedAddress,
        formattedDeliveryAddress: configuration.addresses.deliveryAddress.formattedAddress,
        pickUpAddress: new firebaseInstance.firestore.GeoPoint(configuration.addresses.pickUpAddress.lat, configuration.addresses.pickUpAddress.lng),
        deliveryAddress:  new firebaseInstance.firestore.GeoPoint(configuration.addresses.deliveryAddress.lat, configuration.addresses.deliveryAddress.lng),
      }
    });
  } else {
    configurationWithGeoPoint = configuration
  }
  const project = Object.assign(
      {},
      { category: projectCategory, configuration: configurationWithGeoPoint, type: 'DIRECT', providerId }
    );

  const projectRef = await projectCollectionRef.add(project);
  const projectId = projectRef.id;
  return projectId;

}

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
    const mappedConfiguration = Object.assign({}, project.configuration, {
      addresses: {
        pickUpAddress: {
          lat: project.configuration.addresses.pickUpAddress.latitude,
          lng: project.configuration.addresses.pickUpAddress.longitude,
        },
        deliveryAddress: {
          lat: project.configuration.addresses.deliveryAddress.latitude,
          lng: project.configuration.addresses.deliveryAddress.longitude,
        }
      }
    })
    const resolvedProject = Object.assign(project, {
      receivers,
      configuration: mappedConfiguration
    });
    dispatch({
      type: GET_MY_PROJECT_SUCCESS,
      data: resolvedProject,
      projectId
    });
  });
};


export const GET_MY_PROJECTS_PENDING = 'GET_MY_PROJECTS_PENDING';
export const GET_MY_PROJECTS_SUCCESS = 'GET_MY_PROJECTS_SUCCESS';
export const GET_MY_PROJECTS_FAIL = 'GET_MY_PROJECTS_FAIL';


export const getMyProjects = (projectRefs) => async dispatch => {
  dispatch({
    type: GET_MY_PROJECTS_PENDING
  });
  const projectPromises = projectRefs.map(async (pRef) => {
    const project = await pRef.get();
    return project.data();
  });

  const projects = await Promise.all(projectPromises);
  const mappedProjects = projects.map(p => {
    const mappedConfiguration = Object.assign({}, p.configuration, {
      addresses: {
        pickUpAddress: {
          lat: p.configuration.addresses.pickUpAddress.latitude,
          lng: p.configuration.addresses.pickUpAddress.longitude,
        },
        deliveryAddress: {
          lat: p.configuration.addresses.deliveryAddress.latitude,
          lng: p.configuration.addresses.deliveryAddress.longitude,
        }
      }
    });
    return Object.assign({}, p, {configuration: mappedConfiguration});
  })
  dispatch({
    type: GET_MY_PROJECTS_SUCCESS,
    data: mappedProjects,
  });
};
