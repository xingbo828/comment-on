import React from 'react';
import { GeosuggestStyled, Label, LabelTxt } from './Styled';

const AddressAutoComplete = ({ handleSuggestionSelect, placeholder, label }) => {
  return (
    <Label>
      <LabelTxt>{label}</LabelTxt>
      <GeosuggestStyled
        country="ca"
        placeholder={placeholder}
        onSuggestSelect={handleSuggestionSelect}
      />
    </Label>
  );
};

AddressAutoComplete.defaultProps = {
  handleSuggestionSelect: () => {},
  placeholder: 'Search place',
  label: 'Start Here',
};

export default AddressAutoComplete;
