import React, { Component } from 'react';
import {
  GeosuggestStyled,
  Container,
  FocusBorder,
  Label
} from './Styled';


class AddressAutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      filled: false
    };

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.mapSuggestDescription = this.mapSuggestDescription.bind(this);
  }

  componentDidMount() {
    if(this.props.initialValue !== '') {
      this.setState(() => ({
        filled: true
      }));
    }
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
      this.setState({ filled: false })
      this.props.onSelect(null);
      return
    }
    this.setState({ filled: true })
  }

  mapSuggestDescription(suggest) {
    return suggest.description.replace(', Canada', '');
  }

  render() {
    const { onSelect, label, initialValue, bordered, placeholder } = this.props;
    return (
      <Container bordered={bordered} filled={this.state.filled || placeholder} focused={this.state.focused}>
        <Label bordered={bordered} filled={this.state.filled || placeholder} focused={this.state.focused}>{label}</Label>
        <GeosuggestStyled
          innerRef={el => (this._geoSuggest = el)}
          country="ca"
          initialValue={initialValue}
          placeholder={placeholder}
          minLength={2}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onSuggestSelect={onSelect}
          onChange={this.handleOnChange}
          getSuggestLabel={this.mapSuggestDescription}
        />
        <FocusBorder />
      </Container>
    );
  }
}

AddressAutoComplete.defaultProps = {
  onSelect: () => {},
  label: '',
  initialValue: '',
  icon: 'map-marker',
  placeholder: ''
};

export default AddressAutoComplete;
