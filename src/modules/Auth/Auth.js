import React from 'react';

const Auth = ({ user, login }) => {
  if (user.status === 'UNINIT') {
    return <button onClick={login}>Login</button>;
  } else if(user.status === 'PENDING') {
    return <p>Fetching...</p>;
  } else if(user.status === 'SUCCESSFUL') {
    return <p>Hi {user.name}</p>;
  }
}

export default Auth;