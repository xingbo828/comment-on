import axios from 'axios';
import { auth } from './firebaseClient';

const baseURL = 'https://us-central1-comment-on-85597.cloudfunctions.net';

const createHttpClient = async () => {
  try {
    const myToken = await auth.currentUser.getIdToken(true);
    return axios.create({
      baseURL,
      timeout: 3000,
      headers: {
        'Authorization': `Bearer ${myToken}`
      }
    });
  }
  catch(err) {
    console.error(err);
    throw err;
  }
};

export default createHttpClient;
