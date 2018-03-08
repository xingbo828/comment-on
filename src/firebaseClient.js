import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

import getConfig from './config';


firebase.initializeApp(getConfig());

export const firebaseInstance = firebase;
export const auth = firebase.auth();
export const storage = firebase.storage();
export const firestore = firebase.firestore();
