import React from 'react';
import { Redirect } from 'react-router-dom';
import includes from 'lodash/includes';
import {
  WrapperDiv,
  FacebookButton,
  GoogleButton,
  StyledH1,
  LogoPlaceholder,
  InnerDiv
} from './Styled';

const _isProfileCompleted = (profile) => {
  return !!profile.email;
};


const Login = ({ location, account, facebookLogin, googleLogin, logout }) => {

  const redirectAfterLogin = () => {
    if(includes(location.search, '?redirect=')) {
      const redirectTo = location.search.replace('?redirect=', '');
      return <Redirect to={redirectTo} />;
    }
    return _isProfileCompleted(account.user) ? <Redirect to="/" /> : <Redirect to="/account/profile" />;
  };

  const renderLoginOptions = () => {
    return (
      <WrapperDiv>
        <InnerDiv>
          <LogoPlaceholder>Logo Placeholder</LogoPlaceholder>
          <StyledH1>Login with</StyledH1>
          <FacebookButton onClick={facebookLogin}>Facebook</FacebookButton>
          <GoogleButton onClick={googleLogin}>Google</GoogleButton>
        </InnerDiv>
      </WrapperDiv>
    );
  };

  return account.status === 'AUTHENTICATED' ? redirectAfterLogin() : renderLoginOptions();
};

export default Login;
