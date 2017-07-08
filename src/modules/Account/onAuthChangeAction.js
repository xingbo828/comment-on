import { auth } from '../../firebaseClient';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export const onAuthChange = () => (dispatch) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      dispatch({
        type: USER_LOGIN,
        data: {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL
        }
      });
    } else {
      dispatch({
        type: USER_LOGOUT
      });
    }
  });
};
