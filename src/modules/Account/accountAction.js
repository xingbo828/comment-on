import { auth, storage, database } from '../../firebaseClient';

const storageRef = storage.ref();

export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const UPDATE_PROFILE_PICTURE = 'UPDATE_PROFILE_PICTURE';

const _extractAdditionalProfile = ({ gender, birthdate, displayName, email, photoURL }) => {
  return {
    gender: gender || null,
    birthdate: birthdate || null,
    displayName: displayName || null,
    email: email || null,
    photoURL: photoURL || null
  }
};

const updateUserEmail = (user, updatedEmail) => {
  if(user.email !== updatedEmail && !!updatedEmail) {
    return user.updateEmail(updatedEmail);
  }
  return Promise.resolve(true);
};
export const updateProfile = profile => (dispatch) => {
  const user = auth.currentUser;
  return user.updateProfile(profile.toJS())
  .then(() => {
    return updateUserEmail(user, profile.toJS().email);
  })
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
    const user = auth.currentUser;
    dispatch({
      type: UPDATE_PROFILE_PICTURE,
      data: updatedProfileImageUrl
    });
    return user.updateProfile({
      photoURL: updatedProfileImageUrl
    });
  });
};
