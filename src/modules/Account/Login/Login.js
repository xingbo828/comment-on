import React from 'react';
import { Redirect } from 'react-router-dom';
import { 
  WrapperDiv, 
  FacebookButton,
  GoogleButton,
  StyledH1,
  LogoPlaceholder,
  InnerDiv
} from './Styled';


const Login = ({ account, facebookLogin, googleLogin, logout }) => {
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
