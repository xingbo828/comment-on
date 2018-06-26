import React from 'react';

import Grid from '../../../../../globalComponents/Grid';
import Layout from '../../../../../globalComponents/Layout';

import { TextArea, TextField, Legend } from '../../../../../globalComponents/Form';
import Address from './Address';
import Date from './Date';
import Items from './Items';
import Logistics from './Logistics';


const { Form, FormInner, FormFieldSet } = Layout.Form;
const AvailableSections = {
  Address,
  Date,
  Items,
  Logistics
};

const ConfigurationOverview = ({
  configurations,
  overview,
  handleSubmit,
  setProjectName,
  setAdditionalNotes,
  editPath
}) => {
  const renderSections = (configurations) => configurations.filter(s => s.toLowerCase() === 'address').map(c => {
      const Comp = AvailableSections[c];
      return <Comp key={c} editPath={editPath} />
    })


  const renderProjectName = (name, onChange) => {
    const onChangeHandler = (e) => {
      onChange(e.target.value);
    };

    const input = {
      value: name,
      onChange: onChangeHandler
    };
    return (
      <div>
        <Legend>Enter a name for your project</Legend>
        <TextField
          input={input}
          label="Project name"
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
            {/* <AddressOverview detail={addresses.detail} isValid={addressValidator()}/>
            {renderdateSection(date, validators.dateValidator)}
            {renderLogistics(logistics, validators.logisticsValidator)}
            {renderItemsSection(items)} */}
          </FormFieldSet>
          <FormFieldSet>
            {renderProjectName(overview.projectName.detail, setProjectName)}
          </FormFieldSet>
          <FormFieldSet>
            {renderAdditionalNoteSection(overview.notes.detail, setAdditionalNotes)}
          </FormFieldSet>
        </FormInner>

      </Form>
    </Grid.Container>
  );
};

export default ConfigurationOverview;
