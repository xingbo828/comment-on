import React from 'react';
import { Redirect } from 'react-router-dom';


const Login = ({ account, facebookLogin, googleLogin, logout }) => {

  const redirectAfterLogin = () => {
    return account.user.hasProfile ? <Redirect to="/" /> : <Redirect to="/account/profile-basic" />;
  };

  const renderLoginOptions = () => {
    return (
      <div>
        <button onClick={facebookLogin}>Login with Facebook</button>
        <button onClick={googleLogin}>Login with Google</button>
      </div>
    );
  };

  return account.status === 'AUTHENTICATED' ? redirectAfterLogin() : renderLoginOptions();
};

export default Login;
