import React from 'react';
import { Field } from 'redux-form/immutable';
import {
  Button,
  TextField,
  TextArea,
  Checkbox
} from '../../../../globalComponents/Form';
import Icon from '../../../../globalComponents/Icon';
import Layout from '../../../../globalComponents/Layout';
import { Heading } from '../../../../globalComponents/Typography';


import Grid from '../../../../globalComponents/Grid';
import { SERVICE_AREAS } from '../../../../constants';

import BusinessHour from '../../Create/BusinessHour';

const renderDescriptionTextArea = ({ input, ...rest }) => (
  <TextArea input={input} {...rest} rows="4" />
);

const renderBusinessHour = ({ input, ...rest }) => {
  const pureValue = (input.value.toJS && input.value.toJS()) || input.value;
  return <BusinessHour value={pureValue} onChange={input.onChange} {...rest} />;
};

const renderBusinessServiceAreas = ({ input, ...rest }) => {
  const pureValue = (input.value.toJS && input.value.toJS()) || input.value;
  return (
    <Checkbox.CheckboxGroup
      name={input.name}
      value={pureValue}
      onChange={input.onChange}
      {...rest}
      label="Service Areas"
    />
  );
};

const { Container, Row, Col } = Grid;

const { Form, FormActions, FormHeading, FormInner } = Layout.Form;

const BasicInfo = ({ handleSkip, handleSubmit, pristine, reset, valid, submitting }) => {
  return (
    <Container>
      <FormHeading>
        <Heading wrapperTag="h1">Account Profile</Heading>
      </FormHeading>
      <Form onSubmit={handleSubmit}>
      <FormInner>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24}>
            <Field
              component={TextField}
              type="text"
              name="businessName"
              label="Business Name"
              placeholder="My great moving company"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24}>
            <Field
              component={TextField}
              type="text"
              name="businessAddr1"
              label="Address 1"
              placeholder="123 Main St"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24}>
            <Field
              component={TextField}
              type="text"
              name="businessAddr2"
              label="Address 2"
              placeholder="Ste 200"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={10} lg={10}>
            <Field
              component={TextField}
              type="text"
              name="businessAddrCity"
              label="City"
              placeholder="Vancouver"
            />
          </Col>
          <Col xs={24} sm={24} md={7} lg={7}>
            <Field
              component={TextField}
              type="text"
              name="businessAddrProv"
              label="Province"
              placeholder="BC"
            />
          </Col>
          <Col xs={24} sm={24} md={7} lg={7}>
            <Field
              component={TextField}
              type="text"
              name="businessAddrPostalCode"
              label="Postal Code"
              placeholder="V1L 8PK"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24}>
            <Field
              component={TextField}
              type="tel"
              name="businessPhoneNumber"
              label="Business Phone Number"
              placeholder="(555)555-5555"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24}>
            <Field
              component={TextField}
              type="email"
              name="businessEmail"
              label="Business Email Address"
              placeholder="xyz@email.com"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24}>
            <Field
              component={renderDescriptionTextArea}
              name="businessDescription"
              label="Description"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24}>
            <Field
              component={renderBusinessServiceAreas}
              name="businessServiceArea"
            >
              {SERVICE_AREAS.map(s => (
                <Checkbox.Checkbox
                  key={s.value}
                  value={s.value}
                  label={s.label}
                />
              ))}
            </Field>
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24}>
            <Field
              component={renderBusinessHour}
              name="businessHour"
              label="Business hours"
            />
          </Col>
        </Row>
        </FormInner>
        <FormActions>
        <Button
            style={{ float: 'right', marginLeft: '1rem' }}
            type="submit"
            primary
            disabled={submitting || pristine || !valid}
          >
           Update <Icon icon="pencil" />
          </Button>
        <Button
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

export default BasicInfo;
