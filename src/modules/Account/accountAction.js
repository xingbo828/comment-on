import { auth, database } from '../../firebaseClient';
const userDbRef = database.ref().child('users');

export const UPDATE_PROFILE = 'UPDATE_PROFILE';

const _updateUserEmail = (user, updatedEmail) => {
  if(!!updatedEmail && user.email !== updatedEmail) {
    return user.updateEmail(updatedEmail);
  }
  return Promise.resolve(true);
};

export const updateProfile = immuProfile => (dispatch) => {
  const user = auth.currentUser;
  const profile = immuProfile.toJS();
  return user.updateProfile(profile)
  .then(() => _updateUserEmail(user, profile.email))
  .then(() => {
    dispatch({
      type: UPDATE_PROFILE,
      data: profile
    });
    return profile;
  }).catch((error) => {
    console.log(error);
  });
};

export const updateUserMoverRef = (moverId, uid) => (dispatch) => {
  const userRef = userDbRef.child(uid);
  return userRef.set({
    moverId
  }).then(() => {
    dispatch({
      type: UPDATE_PROFILE,
      data: { moverId }
    });
  });
} ;

