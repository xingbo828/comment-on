import React from 'react';
import { GeosuggestStyled, Label, LabelTxt } from './Styled';

const AddressAutoComplete = ({ onSelect, placeholder, label }) => {
  return (
    <Label>
      <LabelTxt>{label}</LabelTxt>
      <GeosuggestStyled
        country="ca"
        placeholder={placeholder}
        onSuggestSelect={onSelect}
      />
    </Label>
  );
};

AddressAutoComplete.defaultProps = {
  onSelect: () => {},
  placeholder: 'Search place',
  label: 'Start Here',
};

export default AddressAutoComplete;
