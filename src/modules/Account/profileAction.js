import { auth } from '../../firebaseClient';

export const UPDATE_PROFILE = 'UPDATE_PROFILE';

export const updateProfile = profile => (dispatch) => {
  const user = auth.currentUser;
  user.updateProfile(profile)
  .then(() => {
    dispatch({
      type: UPDATE_PROFILE,
      data: user.toJSON()
    });
  }, () => {

  });
};
