import React from 'react';
import { Field } from 'redux-form/immutable';
import { Button, TextField } from '../../../../globalComponents/Form';
import {
  Wrapper,
  Form,
  OtherServicesWrapper,
  OtherServicesText,
  OtherServiceIcon,
  ActionWrapper,
  ActionForgotPw
} from './Styled';

const LoginPanel = ({ handleSubmit, submitting, valid, facebookLogin, googleLogin }) => {
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Field component={TextField} name="email" label="Email" />
        <Field
          component={TextField}
          name="password"
          type="password"
          label="Password"
        />
        <ActionWrapper>
          <Button small disabled={submitting || !valid} success style={{display: 'inline-block'}}>Login</Button>
          <ActionForgotPw to="/reset-password">Forgot password</ActionForgotPw>
        </ActionWrapper>
      </Form>

      <OtherServicesWrapper>
        <OtherServicesText>Login with other services:</OtherServicesText>
        <OtherServiceIcon onClick={googleLogin} icon="google-plus-square" style={{color: '#d31b1c'}}/>
        <OtherServiceIcon onClick={facebookLogin} icon="facebook-square" style={{color: '#3b5899'}}/>
      </OtherServicesWrapper>
    </Wrapper>
  );
};

export default LoginPanel;
