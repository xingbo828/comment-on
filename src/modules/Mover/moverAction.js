import {
  auth,
  storage,
  database
} from '../../firebaseClient';
import { updateUserMoverRef } from '../Account/accountAction';

const imgStorageRef = storage.ref();
const moverDbRef = database.ref().child('movers');

export const LOADING_MOVER_PROFILE = 'LOADING_MOVER_PROFILE';
export const LOADED_MOVER_PROFILE = 'LOADED_MOVER_PROFILE';

export const getMover = moverId => async dispatch => {
  dispatch({
    type: LOADING_MOVER_PROFILE,
    data: {
      key: moverId
    }
  });
  const moverRef = moverDbRef.child(moverId);
  const moverProfile = await moverRef.once('value');
  dispatch({
    type: LOADED_MOVER_PROFILE,
    data: {
      key: moverId,
      profile: moverProfile.toJSON()
    }
  });
};

export const addMover = moverInfo => async dispatch => {
  try {
    const uid = auth.currentUser.uid;
    const rawUserData = await database.ref('users/' + uid).once('value');
    // If mover account already exist
    const userData = rawUserData.toJSON();
    if(userData && userData.moverId) {
      return Promise.reject({
        message: 'Already have mover account registered.'
      });
    }
    moverInfo.owner = uid;
    const moverId = moverDbRef.push().key;
    // Upload logo
    const logo = await _uploadLogo(moverInfo.logo, moverId);
    // Create mover
    const moverRef = moverDbRef.child(moverId);
    const updatedMoverInfo = Object.assign({}, moverInfo, { logo });
    await moverRef.set(updatedMoverInfo);
    // Update user with mover id
    await updateUserMoverRef(moverId, uid)(dispatch);
    return moverId;
  } catch(error) {
    console.log(error);
  }
};

export const updateBasicInfo = (moverInfo, moverId) => async dispatch => {
  const logo = await _uploadLogo(moverInfo.logo, moverId);
  const moverRef = moverDbRef.child(moverId);
  const updatedMoverInfo = Object.assign({}, moverInfo, { logo });
  await moverRef.set(updatedMoverInfo);
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
    const imgRef = imgStorageRef.child(`images/mover/${moverId}/${c.avatar.name}`);
    const result = await imgRef.put(c.avatar)
    return result.downloadURL;
  }));

  const moverRef = moverDbRef.child(moverId);
  const mappedCrewMembers = crewMembers.map((c, index) => {
    c.avatar = crewMemberAvatars[index];
    return c;
  });

  const updatedMoverInfo = Object.assign({}, moverInfo, {
    crewMembers: mappedCrewMembers
  });
  await moverRef.set(updatedMoverInfo);
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
  const imgRef = imgStorageRef.child(`images/mover/${moverId}/${logo.name}`);
  const result = await imgRef.put(logo);
  return result.downloadURL;
};


export const updateVehicles = (moverInfo, moverId) => async dispatch => {
  // const { vehiclesInfo } = moverInfo;
    const moverRef = moverDbRef.child(moverId);
    await moverRef.set(moverInfo);
    return dispatch({
      type: LOADED_MOVER_PROFILE,
      data: {
        key: moverId,
        profile: moverInfo
      }
    });
};



