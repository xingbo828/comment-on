import axios from 'axios';

const createHttpClient = () => {
  const getBaseUrl = () => {
    return 'https://us-central1-comment-on-85597.cloudfunctions.net';
  };
  const client = axios.create({
    baseURL: getBaseUrl(),
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });

  // attach response interceptors
  const onSuccess = (response) => {
    console.info('Response', response);
  };

  const onError = (error) => {
    console.error('Error', error);
  };

  client.interceptors.response.use(onSuccess, onError);
  return client;
};

export default createHttpClient;
