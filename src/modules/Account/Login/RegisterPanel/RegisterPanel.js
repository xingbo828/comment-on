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
} from '../LoginPanel/Styled';

const LoginPanel = ({ handleSubmit, facebookLogin, googleLogin }) => {
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
        <Field
          component={TextField}
          name="confirm"
          type="password"
          label="Confirm password"
        />
        <ActionWrapper>
          <Button type="primary" style={{display: 'inline-block'}}>Register</Button>
        </ActionWrapper>
      </Form>

      <OtherServicesWrapper>
        <OtherServicesText>Register with other services:</OtherServicesText>
        <OtherServiceIcon onClick={googleLogin} size="2x" icon="google-plus-square" style={{color: '#d31b1c'}}/>
        <OtherServiceIcon onClick={facebookLogin} size="2x" icon="facebook-square" style={{color: '#3b5899'}}/>
      </OtherServicesWrapper>
    </Wrapper>
  );
};

export default LoginPanel;
