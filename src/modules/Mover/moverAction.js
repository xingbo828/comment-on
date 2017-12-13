import {
  auth,
  storage,
  firestore
} from '../../firebaseClient';
import { randomFileName } from '../Common/utils/file';
import { updateUserMoverRef } from '../Account/accountAction';

const moverCollectionRef = firestore.collection('movers');
const userCollectionRef = firestore.collection('users');

const imgStorageRef = storage.ref();

export const LOADING_MOVER_PROFILE = 'LOADING_MOVER_PROFILE';
export const LOADED_MOVER_PROFILE = 'LOADED_MOVER_PROFILE';


const _getMyMoverId = async () => {
  const uid = auth.currentUser.uid;
  const userDocRef = userCollectionRef.doc(uid);
  const userDoc = await userDocRef.get();
  if(userDoc.exists){
    const userData = await userDoc.data();
    return userData.moverId;
  }
  return Promise.reject();
};

export const getMover = () => async dispatch => {
  dispatch({
    type: LOADING_MOVER_PROFILE
  });
  const moverId = await _getMyMoverId();
  const moverDocRef = await moverCollectionRef.doc(moverId);
  const moverDoc = await moverDocRef.get();
  if(moverDoc.exists) {
    const moverData = await  moverDoc.data();
    dispatch({
      type: LOADED_MOVER_PROFILE,
      data: {
        key: moverId,
        profile: moverData
      }
    });
  } else {
    dispatch({
      type: LOADED_MOVER_PROFILE,
      data: {
        key: moverId,
        profile: {}
      }
    });
  }
};

export const getMoverWithId = (moverId) => async dispatch => {
  dispatch({
    type: LOADING_MOVER_PROFILE
  });
  const moverDocRef = await moverCollectionRef.doc(moverId);
  const moverDoc = await moverDocRef.get();
  if(moverDoc.exists) {
    const moverData = await  moverDoc.data();
    dispatch({
      type: LOADED_MOVER_PROFILE,
      data: {
        key: moverId,
        profile: moverData
      }
    });
  } else {
    dispatch({
      type: LOADED_MOVER_PROFILE,
      data: {
        key: moverId,
        profile: {}
      }
    });
  }
};

export const addMover = moverInfo => async dispatch => {
  // TODO: query to find if user already has moverID

  const moverDocRef = await moverCollectionRef.add({});
  const moverId = moverDocRef.id;
  const uid = auth.currentUser.uid;
  const logo = await _uploadLogo(moverInfo.logo, moverId);
  await updateUserMoverRef(moverId, uid)(dispatch);
  await moverDocRef.update(Object.assign(moverInfo, {
    logo
  }));
  return moverId;
};

export const updateBasicInfo = (moverInfo) => async dispatch => {
  const moverId = await _getMyMoverId();
  const logo = await _uploadLogo(moverInfo.logo, moverId);
  const moverDocRef = await moverCollectionRef.doc(moverId);
  const updatedMoverInfo = Object.assign(moverInfo, {
    logo
  });
  await moverDocRef.update(updatedMoverInfo);
  return dispatch({
    type: LOADED_MOVER_PROFILE,
    data: {
      key: moverId,
      profile: updatedMoverInfo
    }
  });
};

export const updateCrewMember = (moverInfo) => async dispatch => {
  const moverId = await _getMyMoverId();
  const { crewMembers } = moverInfo;
  const crewMemberAvatars = await Promise.all(crewMembers.map(async (c) => {
    if (typeof c.avatar === 'string') {
      return Promise.resolve(c.avatar);
    }
    const imageName = randomFileName(c.avatar.name);
    const imgRef = imgStorageRef.child(`images/mover/${moverId}/${imageName}`);
    const result = await imgRef.put(c.avatar)
    return result.downloadURL.replace(imageName, `thumb_${imageName}`);
  }));

  // const moverRef = moverDbRef.child(moverId);
  const mappedCrewMembers = crewMembers.map((c, index) => {
    c.avatar = crewMemberAvatars[index];
    return c;
  });

  const updatedMoverInfo = Object.assign({}, moverInfo, {
    crewMembers: mappedCrewMembers
  });
  const moverDocRef = await moverCollectionRef.doc(moverId);
  await moverDocRef.update(updatedMoverInfo);
  return dispatch({
    type: LOADED_MOVER_PROFILE,
    data: {
      key: moverId,
      profile: updatedMoverInfo
    }
  });
};


const _uploadLogo = async (logo, moverId) => {
  if (typeof logo === 'string') {
    return logo;
  }
  const imageName = randomFileName(logo.name);
  const imgRef = imgStorageRef.child(`images/mover/${moverId}/${imageName}`);
  const result = await imgRef.put(logo);
  return result.downloadURL.replace(imageName, `thumb_${imageName}`);
};


export const updateVehicles = (moverInfo) => async dispatch => {
    const moverId = await _getMyMoverId();
    const moverDocRef = await moverCollectionRef.doc(moverId);
    await moverDocRef.update(moverInfo);

    return dispatch({
      type: LOADED_MOVER_PROFILE,
      data: {
        key: moverId,
        profile: moverInfo
      }
    });
};



