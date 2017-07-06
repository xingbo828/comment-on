import React from 'react';

const Auth = ({ user, login }) => user.name ? <p>Hi {user.name}</p> : <button onClick={login}>Login</button>;

export default Auth;