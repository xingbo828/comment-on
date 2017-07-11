import React from 'react';
import { Redirect } from 'react-router-dom';


const Login = ({ account, facebookLogin, googleLogin, logout }) => {
  const renderLoginOptions = () => {
    return (
      <div>
        <button onClick={facebookLogin}>Login with Facebook</button>
        <button onClick={googleLogin}>Login with Google</button>
      </div>
    );
  };

  const renderUserInfo = () => {
    return <Redirect to="/" />
  };

  const render = () => {
    switch (account.status) {
      case 'AUTHENTICATED':
        return renderUserInfo();
      case 'NOT_AUTHENTICATED':
        return renderLoginOptions();
      default:
        return <p>Loading...</p>;
    }
  };

  return (
    render()
  );
};

export default Login;
