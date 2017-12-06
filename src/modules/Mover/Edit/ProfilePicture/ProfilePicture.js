import React from 'react';
import { Field } from 'redux-form/immutable';
import { Button, ImgUpload } from '../../../../globalComponents/Form';
import Grid from '../../../../globalComponents/Grid';
import Icon from '../../../../globalComponents/Icon';
import Layout from '../../../../globalComponents/Layout';
import { Heading } from '../../../../globalComponents/Typography';

const MultiImgUpload = ImgUpload.MultiImgUpload;
const SingleImgUpload = ImgUpload.SingleImgUpload;

const renderLogo = ({ input, ...rest }) => {
  return (
    <SingleImgUpload
      value={input.value}
      onChange={input.onChange}
      {...rest}
      actionText={<Icon icon="upload" size="lg" />}
    />
  );
};

const renderProfileImgs = ({ input, ...rest }) => {
  const pureValue = (input.value.toJS && input.value.toJS()) || input.value;
  return (
    <MultiImgUpload
      onChange={input.onChange}
      images={pureValue || []}
      {...rest}
      limit={3}
      actionText={<Icon icon="upload" size="lg" />}
    />
  );
};

const { Container } = Grid;

const { Form, FormActions, FormHeading, FormInner } = Layout.Form;

const ProfilePicture = ({
  handleSkip,
  handleSubmit,
  pristine,
  reset,
  valid,
  submitting,
  doneLoading
}) => {
  return (
    <Container>
      <FormHeading>
        <Heading wrapperTag="h1">Profile Pictures</Heading>
      </FormHeading>
      <Form onSubmit={handleSubmit}>
        <FormInner>
          <Field component={renderLogo} name="logo" label="Business Logo" />
          <Field
            component={renderProfileImgs}
            name="profileImgs"
            label="Profile images"
          />
        </FormInner>
        <FormActions>
          <Button
            style={{ float: 'right', marginLeft: '1rem' }}
            type="submit"
            primary
            disabled={submitting || pristine || !valid}
          >
            Update{' '}
            <Icon icon={submitting ? 'refresh' : 'pencil'} spin={submitting} />
          </Button>
          <Button
            disabled={submitting}
            style={{ float: 'right' }}
            ghost
            onClick={handleSkip}
          >
            Skip <Icon icon="angle-double-right" />
          </Button>
        </FormActions>
      </Form>
    </Container>
  );
};

export default ProfilePicture;
