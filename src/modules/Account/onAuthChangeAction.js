import { auth } from '../../firebaseClient';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export const onAuthChange = () => (dispatch) => {
  auth.onAuthStateChanged((user) => {
    console.log(user);
    if (user) {
      dispatch({
        type: USER_LOGIN,
        data: user
      });
    } else {
      dispatch({
        type: USER_LOGOUT
      });
    }
  });
};
