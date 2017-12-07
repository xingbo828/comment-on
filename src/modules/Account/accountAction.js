import { auth, database, storage } from '../../firebaseClient';
const userDbRef = database.ref().child('users');
const storageRef = storage.ref();

export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const EMAIL_CONFIRMATION = 'EMAIL_CONFIRMATION';

const _updateUserEmail = (user, updatedEmail) => async dispatch => {
  if (!!updatedEmail && user.email !== updatedEmail) {
    const userUpdateResult = await user.updateEmail(updatedEmail);
    sendEmailConfirmation()(dispatch);
    return userUpdateResult;
  }
};

const _uploadProfileImg = async (img, uid) => {
  if (typeof img === 'string') {
    return img;
  }
  const profileImgRef = storageRef.child(`images/profile/${uid}/${img.name}`);
  const result = await profileImgRef.put(img);
  return result.downloadURL;
};

export const updateProfile = profile => async dispatch => {
  const user = auth.currentUser;
    const photoURL = await _uploadProfileImg(profile.photoURL, user.uid);
    const updatedProfile = Object.assign({}, profile, { photoURL });
    await user.updateProfile(updatedProfile);
    await _updateUserEmail(user, profile.email)(dispatch);
    dispatch({
      type: UPDATE_PROFILE,
      data: updatedProfile
    });
    return updatedProfile;
};

export const sendEmailConfirmation = () => async dispatch => {
  const user = auth.currentUser;
  await user.sendEmailVerification();
  dispatch({
    type: EMAIL_CONFIRMATION,
    data: true
  });
};

export const dismissEmailConfirmation = () => dispatch => {
  dispatch({
    type: EMAIL_CONFIRMATION,
    data: false
  });
};

export const updateUserMoverRef = (moverId, uid) => dispatch => {
  const userRef = userDbRef.child(uid);
  return userRef
    .set({
      moverId
    })
    .then(() => {
      dispatch({
        type: UPDATE_PROFILE,
        data: { moverId }
      });
    });
};

export const updateUserLeadIds = (leadId, uid) => async dispatch => {
  const userRef = userDbRef.child(uid);
  const rawUserInfo = await userRef.once('value');
  const userInfo = rawUserInfo.toJSON();
  const currentLeads = userInfo.leads ? Object.values(userInfo.leads) : [];
  const newLeadCollection = currentLeads.concat([leadId]);
  await userRef.set({
    leads: newLeadCollection
  });
  const udpatedLeads = await userRef.child('leads').once('value');
  dispatch({
    type: UPDATE_PROFILE,
    data: { leads: udpatedLeads.toJSON() }
  });
};
