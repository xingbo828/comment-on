import { auth, storage } from '../../firebaseClient';

const storageRef = storage.ref();

export const UPDATE_PROFILE = 'UPDATE_PROFILE';

export const updateProfile = profile => (dispatch) => {
  const user = auth.currentUser;
  user.updateProfile(profile.toJS())
  .then(() => {
    dispatch({
      type: UPDATE_PROFILE,
      data: user.toJSON()
    });
  }, () => {

  });
};

export const uploadProfileImg = (file, uid) => (dispatch) => {
  const profileImageRef = storageRef.child(`images/profile/${uid}/${file.name}`);
  profileImageRef.put(file)
  .then((result) => {
    const updatedProfileImageUrl = result.downloadURL;
    dispatch(updateProfile({
      photoURL: updatedProfileImageUrl
    }));
  });
};
