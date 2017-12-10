import * as firebase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyD-_qTEnH7-6KSLKtCPHLgdodwBTS45xus",
  authDomain: "comment-on-85597.firebaseapp.com",
  databaseURL: "https://comment-on-85597.firebaseio.com",
  projectId: "comment-on-85597",
  storageBucket: "comment-on-85597.appspot.com",
  messagingSenderId: "177107431871"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const storage = firebase.storage();
export const firestore = firebase.firestore();
