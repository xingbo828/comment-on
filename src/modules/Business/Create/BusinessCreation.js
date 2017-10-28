import React from 'react';
import { Field } from 'redux-form/immutable';
import {
  Button,
  TextField,
  TextArea,
  Checkbox
} from '../../../globalComponents/Form';

import Grid from '../../../globalComponents/Grid';
import { SERVICE_AREAS } from '../../Common/constants';

import BusinessHour from '../components/BusinessHour';

const renderDescriptionTextArea = ({ input, ...rest }) => (
  <TextArea input={input} {...rest} />
);

const renderBusinessHour = ({ input, ...rest }) => (
  <BusinessHour value={input.value || []} onChange={input.onChange} {...rest} />
);

const renderBusinessServiceAreas = ({ input, ...rest }) => {
  return (
    <Checkbox.CheckboxGroup
      value={input.value || []}
      onChange={input.onChange}
      name={input.name}
      label="Service Areas"
      {...rest}
    />
  );
};

const { Container, Row, Col } = Grid;
const BusinessCreation = ({
  handleSubmit,
  pristine,
  reset,
  valid,
  submitting
}) => {
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24}>
            <Field
              component={TextField}
              type="text"
              name="businessName"
              label="Business Name"
              placeholder="StarBucks"
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
        <Button
          type="submit"
          primary
          disabled={pristine || submitting || !valid}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default BusinessCreation;
