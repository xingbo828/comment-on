import React from 'react';
import { Field } from 'redux-form/immutable';
import Logo from '../../../globalComponents/Logo';
import Icon from '../../../globalComponents/Icon';
import { Button, TextField } from '../../../globalComponents/Form';
import { WrapperDiv, InnerDiv, LogoWrapper, ActionWrapper, ActionBackLink, Form } from './Styled';

const ResetPassword = ({ handleSubmit, submitting, valid, goBack }) => {
  return (
    <WrapperDiv>
      <InnerDiv>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <h1>Reset password</h1>
        <Form onSubmit={handleSubmit}>
          <Field component={TextField} name="email" label="Email" />
          <ActionWrapper>
            <ActionBackLink href="#" onClick={goBack}><Icon icon="angle-left" />Back</ActionBackLink>
            <Button disabled={submitting || !valid} small success><Icon icon="paper-plane-o" /> Send</Button>
          </ActionWrapper>
        </Form>
      </InnerDiv>
    </WrapperDiv>
  );
};

export default ResetPassword;
