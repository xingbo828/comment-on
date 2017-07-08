import React from 'react';

const Auth = ({ auth, facebookLogin, googleLogin, logout }) => {
  const renderLoginOptions = () => {
    return (
      <div>
        <button onClick={facebookLogin}>Login with Facebook</button>
        <button onClick={googleLogin}>Login with Google</button>
      </div>
    );
  };

  const renderUserInfo = () => {
    return (
      <div>
        <img src={auth.user.photoURL} alt="avatar" />
        <p>Hi, {auth.user.displayName}</p>
        <button onClick={logout}>Logout</button>
      </div>);
  };

  const render = () => {
    switch (auth.status) {
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

Auth.prototype = {

};

export default Auth;
