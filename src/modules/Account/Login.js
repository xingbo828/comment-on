import React from 'react';

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
    return (
      <div>
        <img src={account.user.photoURL} alt="avatar" />
        <p>Hi, {account.user.displayName}</p>
        <button onClick={logout}>Logout</button>
      </div>);
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
