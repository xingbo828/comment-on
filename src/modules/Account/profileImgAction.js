import { storage } from '../../firebaseClient';
import { updateProfile } from './profileAction';

const storageRef = storage.ref();

const uploadProfileImg = (file, uid) => (dispatch) => {
  const profileImageRef = storageRef.child(`images/profile/${uid}dddd/${file.name}`);
  profileImageRef.put(file)
  .then((result) => {
    const updatedProfileImageUrl = result.downloadURL;
    dispatch(updateProfile({
      photoURL: updatedProfileImageUrl
    }));
  });
};

export default uploadProfileImg;
