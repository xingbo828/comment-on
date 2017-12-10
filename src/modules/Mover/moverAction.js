import {
  auth,
  storage,
  firestore
} from '../../firebaseClient';
import { randomFileName } from '../Common/utils/file';
import { updateUserMoverRef } from '../Account/accountAction';

const moverCollectionRef = firestore.collection('movers');

const imgStorageRef = storage.ref();

export const LOADING_MOVER_PROFILE = 'LOADING_MOVER_PROFILE';
export const LOADED_MOVER_PROFILE = 'LOADED_MOVER_PROFILE';

export const getMover = moverId => async dispatch => {
  dispatch({
    type: LOADING_MOVER_PROFILE,
    data: {
      key: moverId
    }
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

export const updateBasicInfo = (moverInfo, moverId) => async dispatch => {
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

export const updateCrewMember = (moverInfo, moverId) => async dispatch => {
  const { crewMembers } = moverInfo;
  const crewMemberAvatars = await Promise.all(crewMembers.map(async (c) => {
    if (typeof c.avatar === 'string') {
      return Promise.resolve(c.avatar);
    }
    const imgRef = imgStorageRef.child(`images/mover/${moverId}/${randomFileName(c.avatar.name)}`);
    const result = await imgRef.put(c.avatar)
    return result.downloadURL;
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
  const imgRef = imgStorageRef.child(`images/mover/${moverId}/${randomFileName(logo.name)}`);
  const result = await imgRef.put(logo);
  return result.downloadURL;
};


export const updateVehicles = (moverInfo, moverId) => async dispatch => {
  // const { vehiclesInfo } = moverInfo;
    // const moverRef = moverDbRef.child(moverId);
    // await moverRef.set(moverInfo);

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



