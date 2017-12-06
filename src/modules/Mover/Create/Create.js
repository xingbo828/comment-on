import React from 'react';
import { Field } from 'redux-form/immutable';
import {
  Button,
  TextField,
  TextArea,
  ImgUpload,
  Label
  // Checkbox
} from '../../../globalComponents/Form';
import Layout from '../../../globalComponents/Layout';

import Grid from '../../../globalComponents/Grid';
import Icon from '../../../globalComponents/Icon';
// import { SERVICE_AREAS } from '../../../constants';

import BusinessHour from './BusinessHour';
import { Heading, Paragraph } from '../../../globalComponents/Typography';

const { Form, FormInner, FormHeading, FormActions } = Layout.Form;
const SingleImgUpload = ImgUpload.SingleImgUpload;

const renderDescriptionTextArea = ({ input, ...rest }) => (
  <TextArea input={input} {...rest} />
);

const renderBusinessHour = ({ input, ...rest }) => (
  <BusinessHour value={input.value || []} onChange={input.onChange} {...rest} />
);

const renderLogo = ({ input, ...rest }) => {
  return (
    <div style={{padding: '1rem 0'}}>
      <Label style={{paddingBottom: '1rem'}} htmlFor={input.name}>Business Logo</Label>
      <SingleImgUpload
        value={input.value}
        onChange={input.onChange}
        {...rest}
        actionText={<Icon icon="upload" size="lg" />}
      />
    </div>
  );
};

// const renderBusinessServiceAreas = ({ input, ...rest }) => {
//   return (
//     <Checkbox.CheckboxGroup
//       value={input.value || []}
//       onChange={input.onChange}
//       name={input.name}
//       label="Service Areas"
//       {...rest}
//     />
//   );
// };

const { Container, Row, Col } = Grid;
const Creation = ({
  handleSubmit,
  pristine,
  reset,
  valid,
  submitting
}) => {
  return (
    <Container>
      <FormHeading>
      <Heading wrapperTag="h1">Mover Profile</Heading>
      <Paragraph>
        Let's create the profile for your business.
      </Paragraph>
    </FormHeading>
      <Form onSubmit={handleSubmit}>
      <FormInner>
            <Field
              component={TextField}
              type="text"
              name="businessName"
              label="Business Name"
              placeholder="My great moving company"
            />

            <Field component={renderLogo} name="logo" label="Business Logo" />

            <Field
              component={TextField}
              type="text"
              name="businessAddr1"
              label="Address 1"
              placeholder="123 Main St"
            />

            <Field
              component={TextField}
              type="text"
              name="businessAddr2"
              label="Address 2"
              placeholder="Ste 200"
            />

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

            <Field
              component={TextField}
              type="tel"
              name="businessPhoneNumber"
              label="Business Phone Number"
              placeholder="(555)555-5555"
            />


            <Field
              component={TextField}
              type="email"
              name="businessEmail"
              label="Business Email Address"
              placeholder="xyz@email.com"
            />


            <Field
              component={renderDescriptionTextArea}
              name="businessDescription"
              label="Description"
            />


            {/* <Field
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
            </Field> */}


            <Field
              component={renderBusinessHour}
              name="businessHour"
              label="Business hours"
            />
       </FormInner>
        <FormActions>
          <Button
            type="submit"
            style={{ float: 'right' }}
            primary
            disabled={pristine || submitting || !valid}
          >
            Submit <Icon icon={submitting ? 'refresh' : 'pencil'} spin={submitting} />
          </Button>
        </FormActions>
      </Form>
    </Container>
  );
};

export default Creation;
