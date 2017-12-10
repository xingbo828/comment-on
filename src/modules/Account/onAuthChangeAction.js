import { auth, firestore } from '../../firebaseClient';
const userCollectionRef = firestore.collection('users');

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export const onAuthChange = () => dispatch => {
  auth.onAuthStateChanged(async (user) => {
    if (user) {
      const userDocRef = userCollectionRef.doc(user.uid);
      const userDoc = await userDocRef.get();
      if(userDoc.exists){
        const additionalUserData = await userDoc.data();
        dispatch({
          type: USER_LOGIN,
          data: {...user.toJSON(), ...additionalUserData}
        });
      } else {
        dispatch({
          type: USER_LOGIN,
          data: {...user.toJSON()}
        });
      }
    } else {
      dispatch({
        type: USER_LOGOUT
      });
    }
  });
};
