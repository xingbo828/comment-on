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

const Login = ({ isAuthenticated, location, account, facebookLogin, googleLogin, logout, activeTabKey }) => {

  const redirectAfterLogin = () => {
    const hasRedirect = includes(location.search, '?redirect=')

    if(!isProfileCompleted(account.user)) {
      if(hasRedirect) {
        const redirectTo = location.search.replace('?redirect=', '');
        const redirectOpt = {
          pathname: '/account/profile',
          search: `?redirect=${redirectTo}`
        };
        return <Redirect to={redirectOpt} />;
      }
      return <Redirect to="/account/profile" />;
    } else {
      if(hasRedirect) {
        const redirectTo = location.search.replace('?redirect=', '');
        return <Redirect to={redirectTo} />;
      }
      return <Redirect to="/" />;
    }
  };

  const renderLoginOptions = () => {
    return (
      <WrapperDiv>
        <InnerDiv>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <Tabs fillWidth={true} activeKey={activeTabKey}>
            <TabPanel panelKey="login" header={<span style={{fontSize: '1.05rem'}}><Icon icon="sign-in" /> Login</span>}>
              <LoginPanel facebookLogin={facebookLogin} googleLogin={googleLogin} />
            </TabPanel>
            <TabPanel panelKey="register" header={<span style={{fontSize: '1.05rem'}}><Icon icon="user-plus" /> Register</span>}>
              <RegisterPanel facebookLogin={facebookLogin} googleLogin={googleLogin} />
            </TabPanel>
          </Tabs>
        </InnerDiv>
      </WrapperDiv>
    );
  };

  return isAuthenticated ? redirectAfterLogin() : renderLoginOptions();
};

export default Login;
