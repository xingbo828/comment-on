import axios from 'axios';


import getConfig from './config';

const createHttpClient = () => {
  const getBaseUrl = () => {
    const domain = getConfig().cloudFunctionDomain;
    return domain;
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
    return response.data;
  };

  const onError = (error) => {
    console.error('Error', error);
    return error;
  };

  client.interceptors.response.use(onSuccess, onError);
  return client;
};

export default createHttpClient;
