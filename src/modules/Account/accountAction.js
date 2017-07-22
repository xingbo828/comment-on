import Immutable from 'immutable';
import { auth, storage, database } from '../../firebaseClient';

const storageRef = storage.ref();

export const UPDATE_PROFILE = 'UPDATE_PROFILE';

const _extractAdditionalProfile = ({ gender, birthdate }) => {
  return {
    gender: gender || null,
    birthdate: birthdate || null
  }
};

export const updateProfile = profile => (dispatch) => {
  const user = auth.currentUser;

  return user.updateProfile(profile.toJS())
  .then(() => {
    const userRef = database.ref("users/" + user.uid);
    return userRef.set(_extractAdditionalProfile(profile.toJS()));
  }).then(() => {
    dispatch({
      type: UPDATE_PROFILE,
      data: profile.toJSON()
    });
  }).catch((error) => {
    console.log(error);
  });
};

export const uploadProfileImg = (file, uid) => (dispatch) => {
  const profileImageRef = storageRef.child(`images/profile/${uid}/${file.name}`);
  return profileImageRef.put(file)
  .then((result) => {
    const updatedProfileImageUrl = result.downloadURL;
    const promise = dispatch(updateProfile(Immutable.fromJS({
      photoURL: updatedProfileImageUrl
    })));
    return promise;
  });
};
