import { auth, storage, firestore } from '../../firebaseClient';
import { randomFileName } from '../Common/utils/file';
const storageRef = storage.ref();
const userCollectionRef = firestore.collection('users');

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
  const imageName = randomFileName(img.name);
  const profileImgRef = storageRef.child(`images/profile/${uid}/${imageName}`);
  const result = await profileImgRef.put(img);
  const downloadUrl = result.downloadURL.replace(imageName, `thumb_${imageName}`);
  return { downloadUrl, originalUrl: result.downloadURL };
};

export const updateProfile = profile => async dispatch => {
  const user = auth.currentUser;
    const { downloadUrl, originalUrl } = await _uploadProfileImg(profile.photoURL, user.uid);
    const updatedProfile = Object.assign({}, profile, { photoURL: downloadUrl });
    await user.updateProfile(updatedProfile);
    await _updateUserEmail(user, profile.email)(dispatch);
    dispatch({
      type: UPDATE_PROFILE,
      data: Object.assign({}, profile, { photoURL: originalUrl })
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

export const updateUserMoverRef = (moverId, uid) => async dispatch => {
    const userDocRef = userCollectionRef.doc(uid);
    const userDoc = await userDocRef.get();
    if(!userDoc.exists){
      await userDocRef.set({
        moverId
      });
    } else {
      await userDocRef.update({moverId});
    }
    return dispatch({
      type: UPDATE_PROFILE,
      data: { moverId }
    });
};

export const updateUserProjectIds = (projectId, uid) => async dispatch => {
  const userDocRef = userCollectionRef.doc(uid);
  const userDoc = await userDocRef.get();
  if(!userDoc.exists){
    await userDocRef.set({
      projects: [projectId]
    });
    return dispatch({
      type: UPDATE_PROFILE,
      data: { projects: [projectId] }
    });
  } else {
    const userData = await userDoc.data();
    const newProjects = userData.projects ? userData.projects.concat([projectId]) : [projectId];
    await userDocRef.update({projects: newProjects});
    return dispatch({
      type: UPDATE_PROFILE,
      data: { projects: newProjects }
    });
  }

};
