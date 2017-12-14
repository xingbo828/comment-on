import { auth, storage, firestore } from '../../firebaseClient';
import { randomFileName } from '../Common/utils/file';
const storageRef = storage.ref();
const userCollectionRef = firestore.collection('users');

export const UPDATE_PROFILE = 'UPDATE_PROFILE';


const _uploadProfileImg = async (img, uid) => {
  if (typeof img === 'string') {
    return { originalUrl : img, photoURLUpdated: false };
  }
  const imageName = randomFileName(img.name);
  const profileImgRef = storageRef.child(`images/profile/${uid}/${imageName}`);
  const result = await profileImgRef.put(img);
  const downloadUrl = result.downloadURL.replace(imageName, `thumb_${imageName}`);
  return { downloadUrl, originalUrl: result.downloadURL, photoURLUpdated: true };
};

export const updateProfile = profile => async dispatch => {
    const uid = auth.currentUser.uid;
    const userDocRef = userCollectionRef.doc(uid);
    const { displayName, email } = profile;
    const { downloadUrl, originalUrl, photoURLUpdated } = await _uploadProfileImg(profile.photoURL, uid);
    const updatedProfile = Object.assign({ displayName, email }, { photoURL: photoURLUpdated ? downloadUrl : originalUrl });
    await userDocRef.update(updatedProfile);
    const tempProfile = Object.assign({}, updatedProfile, { photoURL: originalUrl });

    dispatch({
      type: UPDATE_PROFILE,
      data: tempProfile
    });

    return tempProfile;
};


export const updateUserMoverRef = (moverId) => async dispatch => {
    const uid = auth.currentUser.uid;
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

export const updateUserProjectIds = (projectId) => async dispatch => {
  const uid = auth.currentUser.uid;
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
