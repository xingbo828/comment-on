import React from 'react';
import Logo from '../../../../globalComponents/Logo';
import Icon from '../../../../globalComponents/Icon';
import { Paragraph } from '../../../../globalComponents/Typography';
import { Button } from '../../../../globalComponents/Form';
import { WrapperDiv, InnerDiv, LogoWrapper } from '../Styled';



const AccountVerificationPanel = ({ resend }) => {
  return (
    <WrapperDiv>
      <InnerDiv>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Paragraph style={{ textAlign: 'left', margin: '0 0 2rem 0' }}>
          Thanks for registering. To complete the account activation, please
          visit the link we sent to your email.
        </Paragraph>
        <Button onClick={resend} success small style={{margin: '1rem 0'}}><Icon icon="paper-plane-o" /> Resend</Button>
      </InnerDiv>
    </WrapperDiv>
  );
};

export default AccountVerificationPanel;
