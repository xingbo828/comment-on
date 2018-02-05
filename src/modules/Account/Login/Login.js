import React from 'react';
import { Redirect } from 'react-router-dom';
import includes from 'lodash/includes';
import {isProfileCompleted} from '../utils';
import {
  WrapperDiv,
  FacebookButton,
  GoogleButton,
  StyledH1,
  LogoPlaceholder,
  InnerDiv
} from './Styled';

const Login = ({ location, account, facebookLogin, googleLogin, logout }) => {

  const redirectAfterLogin = () => {
    let redirectTo = '/';
    if(includes(location.search, '?redirect=')) {
      redirectTo = location.search.replace('?redirect=', '');
    }
    redirectTo = isProfileCompleted(account.user) ? redirectTo : "/account/profile?redirect=" + redirectTo;
    return <Redirect to={redirectTo} />;
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
