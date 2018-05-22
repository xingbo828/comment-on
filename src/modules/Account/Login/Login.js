import React from 'react';
import { Redirect } from 'react-router-dom';
import includes from 'lodash/includes';
import {isProfileCompleted} from '../utils';
import Logo from '../../../globalComponents/Logo';
import Icon from '../../../globalComponents/Icon';
import Tabs from '../../../globalComponents/Tabs';

import LoginPanel from './LoginPanel';
import RegisterPanel from './RegisterPanel';
import {
  WrapperDiv,
  InnerDiv,
  LogoWrapper
} from './Styled';

const TabPanel = Tabs.TabPanel;

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
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <Tabs activeKey="login">
            <TabPanel panelKey="login" header={<span style={{fontSize: '1.15rem', padding: '0 1rem'}}><Icon icon="sign-in" /> Login</span>}>
              <LoginPanel facebookLogin={facebookLogin} googleLogin={googleLogin} />
            </TabPanel>
            <TabPanel panelKey="register" header={<span style={{fontSize: '1.15rem', padding: '0 1rem'}}><Icon icon="user-plus" /> Register</span>}>
              <RegisterPanel facebookLogin={facebookLogin} googleLogin={googleLogin} />
            </TabPanel>
          </Tabs>
        </InnerDiv>
      </WrapperDiv>
    );
  };

  return account.status === 'AUTHENTICATED' ? redirectAfterLogin() : renderLoginOptions();
};

export default Login;
