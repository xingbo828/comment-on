import React, { Component } from 'react';
import { GeosuggestStyled, Label, FocusBorder, IconContainer } from './Styled';
import Icon from '../../Icon';
class AddressAutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    };

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.mapSuggestDescription = this.mapSuggestDescription.bind(this);
  }

  handleFocus(event) {
    this.setState(() => ({
      focused: true
    }), () => {
      this._geoSuggest.input.input.setSelectionRange(0, 9999);
    });

  }

  handleBlur() {
    this.setState({
      focused: false
    });
  }

  handleOnChange(value) {
    if (value === '') {
      this.props.onSelect(null);
    }
  }

  mapSuggestDescription(suggest) {
    return suggest.description.replace(', Canada', '');
  }

  render() {
    const { initialValue, onSelect, placeholder } = this.props;
    return (
      <Label>
        <IconContainer><Icon icon={this.props.icon} size="lg" /></IconContainer>
        <GeosuggestStyled
          innerRef={el => (this._geoSuggest = el)}
          country="ca"
          minLength={2}
          placeholder={placeholder}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onSuggestSelect={onSelect}
          onChange={this.handleOnChange}
          initialValue={initialValue.replace(', Canada', '')}
          getSuggestLabel={this.mapSuggestDescription}
        />
        <FocusBorder focused={this.state.focused} />
      </Label>
    );
  }
}

AddressAutoComplete.defaultProps = {
  onSelect: () => {},
  placeholder: 'Search place',
  initialValue: '',
  icon: 'map-marker'
};

export default AddressAutoComplete;
