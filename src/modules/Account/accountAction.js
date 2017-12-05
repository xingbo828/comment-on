import { auth, database } from '../../firebaseClient';
const userDbRef = database.ref().child('users');

export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const EMAIL_CONFIRMATION = 'EMAIL_CONFIRMATION';

const _updateUserEmail = (user, updatedEmail) => async dispatch => {
  if(!!updatedEmail && user.email !== updatedEmail) {
    await user.updateEmail(updatedEmail)
    sendEmailConfirmation()(dispatch);
  }
};

export const updateProfile = immuProfile => (dispatch) => {
  const user = auth.currentUser;
  const profile = immuProfile.toJS();
  return user.updateProfile(profile)
  .then(() => _updateUserEmail(user, profile.email)(dispatch))
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

export const sendEmailConfirmation = () => async (dispatch) => {
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

