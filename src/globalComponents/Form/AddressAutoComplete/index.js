import React from 'react';
import { GeosuggestStyled } from './Styled';

const AddressAutoComplete = ({ handleSuggestionSelect, placeholder }) => {
  return (
    <GeosuggestStyled
      country="ca"
      placeholder={placeholder}
      onSuggestSelect={handleSuggestionSelect}
    />
  );
};

AddressAutoComplete.defaultProps = {
  handleSuggestionSelect: () => {},
  placeholder: 'Search place'
};

export default AddressAutoComplete;
