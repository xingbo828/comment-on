import { auth, database } from '../../firebaseClient';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';



export const onAuthChange = () => (dispatch) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      database.ref('users/' + user.uid).once('value')
      .then((data) => {
        dispatch({
          type: USER_LOGIN,
          data: {...user.toJSON(), ...data.toJSON() }
        });
      }).catch((error) => {
        console.log(error);
      });

    } else {
      dispatch({
        type: USER_LOGOUT
      });
    }
  });
};
