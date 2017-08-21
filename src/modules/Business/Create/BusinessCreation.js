import React from 'react';
import { Field } from 'redux-form/immutable';
import {
  Button,
  TextField,
  TextArea,
  ImgUpload,
  Checkbox
} from '../../../globalComponents/Form';
import {
  Container,
  Form,
  AddressDetailContainer,
  AddressDetailCity,
  AddressDetailProv,
  AddressDetailPostalCode
} from './Styled';
import { SERVICE_AREAS } from '../../Common/constants';

import BusinessHour from '../Compontnets/BuesinessHour';

const MultiImgUpload = ImgUpload.MultiImgUpload;

const renderDescriptionTextArea = ({ input, ...rest }) =>
  <TextArea input={input} {...rest} rows="4" />;

const renderBusinessHour = ({ input, ...rest }) =>
  <BusinessHour input={input} {...rest} />;

const renderBusinessImgs = ({ input, ...rest }) =>
  <MultiImgUpload
    input={input}
    {...rest}
    limit={3}
    actionText="Upload Images(s)"
  />;

const renderBusinessServiceAreas = ({ input, ...rest }) =>
  <Checkbox.CheckboxGroup input={input} {...rest} label="Service Areas" />;

const BusinessCreation = ({
  handleSubmit,
  pristine,
  reset,
  valid,
  submitting
}) => {
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Field
          component={TextField}
          type="text"
          name="businessName"
          label="Business Name"
          placeholder="StarBucks"
        />
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
        <AddressDetailContainer>
          <AddressDetailCity>
            <Field
              component={TextField}
              type="text"
              name="businessAddrCity"
              label="City"
              placeholder="Vancouver"
            />
          </AddressDetailCity>
          <AddressDetailProv>
            <Field
              component={TextField}
              type="text"
              name="businessAddrProv"
              label="Province"
              placeholder="BC"
            />
          </AddressDetailProv>
          <AddressDetailPostalCode>
            <Field
              component={TextField}
              type="text"
              name="businessAddrPostalCode"
              label="Postal Code"
              placeholder="V1L 8PK"
            />
          </AddressDetailPostalCode>
        </AddressDetailContainer>
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
        <Field
          component={renderBusinessServiceAreas}
          name="businessServiceArea"
        >
          {SERVICE_AREAS.map(s =>
            <Checkbox.Checkbox key={s.value} value={s.value} label={s.label} />
          )}
        </Field>
        <Field
          component={renderBusinessHour}
          name="businessHour"
          label="Business hours"
        />
        <Field
          component={renderBusinessImgs}
          name="businessImgs"
          label="Business Images"
        />
        <Button
          type="submit"
          primary
          disabled={pristine || submitting || !valid}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default BusinessCreation;
