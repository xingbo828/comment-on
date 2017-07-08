import { auth } from '../../firebaseClient';

export const UPDATE_PROFILE = 'UPDATE_PROFILE';

export const updateProfile = (profile) => (dispatch) => {
  const user = auth.currentUser;
  user.updateProfile(profile)
  .then((resolve)=>{
    console.log(resolve);
    dispatch({
      type: UPDATE_PROFILE
    });
  }, () => {

  });
};
