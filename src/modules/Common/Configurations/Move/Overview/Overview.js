import React from 'react';
import values from 'lodash/values';
import isEmpty from 'lodash/isEmpty';
import Grid from '../../../../../globalComponents/Grid';
import Layout from '../../../../../globalComponents/Layout';

import { TextArea, TextField, Legend } from '../../../../../globalComponents/Form';
import Address from './Address';
import Date from './Date';
import Items from './Items';
import Logistics from './Logistics';
import ContactInfo from './ContactInfo';

const { Form, FormInner, FormFieldSet } = Layout.Form;
const AvailableSections = {
  Address,
  Date,
  Items,
  Logistics,
  ContactInfo
};

const ConfigurationOverview = ({
  configurations,
  overview,
  handleSubmit,
  setProjectName,
  setAdditionalNotes,
  editPath,
  formAction,
  setValidationStatus,
  configurationsValidationStatus,
  ...rest
}) => {
  const renderSections = (configurations) => configurations.filter(s => s.toLowerCase() !== 'overview').map(c => {
    const Comp = AvailableSections[c];
      return <Comp key={c} editPath={editPath} setValidationStatus={setValidationStatus} />
    })

  const renderFormAction = (C) => {
    return <C {...rest} isOverviewValid={isOverviewValid()}/>
  }

  const isOverviewValid = () => {
    const configValidateStatusAllTrue = values(configurationsValidationStatus).filter(s => s !== true).length === 0
    const isProjectNameValid = !isEmpty(overview.projectName.detail)
    return configValidateStatusAllTrue && isProjectNameValid
  }


  const renderProjectName = (name, onChange) => {
    const onChangeHandler = (e) => {
      onChange(e.target.value);
    };

    const input = {
      value: name,
      onChange: onChangeHandler
    };
    const meta = {}
    if(isEmpty(name)) {
      meta.error = 'Required'
      meta.touched = true
    }
    return (
      <div>
        <Legend>Enter a name for your project</Legend>
        <TextField
          input={input}
          label="Project name"
          meta={meta}
        />
      </div>
    );
  };

  const renderAdditionalNoteSection = (notes, onChange) => {
    const onChangeHandler = (e) => {
      onChange(e.target.value);
    };

    const input = {
      value: notes,
      onChange: onChangeHandler
    };
    return (
      <div>
        <Legend>Provide us with any additional notes. This is the place for any additional quetions, concerns or information pertaining to your move you feel we may have missed.</Legend>
        <TextArea
          input={input}
          label="Additional notes"
        />
      </div>
    );
  };

  return (
    <Grid.Container>
      <Form onSubmit={handleSubmit}>
        <FormInner>
          <FormFieldSet>
            <Legend>Let's review everything so far. Feel free to go back and make any changes.</Legend>
            {renderSections(configurations)}
          </FormFieldSet>
          <FormFieldSet>
            {renderProjectName(overview.projectName.detail, setProjectName)}
          </FormFieldSet>
          <FormFieldSet>
            {renderAdditionalNoteSection(overview.notes.detail, setAdditionalNotes)}
          </FormFieldSet>
        </FormInner>
        {renderFormAction(formAction)}
      </Form>
    </Grid.Container>
  );
};

export default ConfigurationOverview;