import React from 'react';
import { func, shape, string } from 'prop-types';

const Auth = ({ user, login }) => {
  if (user.status === 'UNINIT') {
    return <button onClick={login}>Login</button>;
  } else if (user.status === 'PENDING') {
    return <p>Fetching...</p>;
  } else if (user.status === 'SUCCESSFUL') {
    return <p>Hi {user.name }</p>;
  }
  return null;
};

Auth.propTypes = {
  user: shape({
    status: string,
    name: string
  }).isRequired,
  login: func.isRequired
};

export default Auth;
