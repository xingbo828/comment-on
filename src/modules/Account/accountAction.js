import { auth, database } from '../../firebaseClient';
const userDbRef = database.ref().child('users');

export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const EMAIL_CONFIRMATION = 'EMAIL_CONFIRMATION';

const _updateUserEmail = (user, updatedEmail) => async dispatch => {
  if (!!updatedEmail && user.email !== updatedEmail) {
    const userUpdateResult = await user.updateEmail(updatedEmail);
    sendEmailConfirmation()(dispatch);
    return userUpdateResult;
  }
};

export const updateProfile = immuProfile => async dispatch => {
    const user = auth.currentUser;
    const profile = immuProfile.toJS();
    await user.updateProfile(profile);
    await _updateUserEmail(user, profile.email)(dispatch);
    dispatch({
      type: UPDATE_PROFILE,
      data: profile
    });
    return profile;
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
