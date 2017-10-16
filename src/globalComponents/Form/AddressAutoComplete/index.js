import React, { Component } from 'react';
import { GeosuggestStyled, Label , FocusBorder} from './Styled';

class AddressAutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    }

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleFocus(event) {
    this.setState({
      focused: true
    });
    this._geoSuggest.input.input.select()
  }

  handleBlur() {
    this.setState({
      focused: false
    });
  }

  handleOnChange(value) {
    if(value === '') {
      this.props.onSelect(null);
    }
  }

  render() {
    const { initialValue, onSelect, placeholder } = this.props;
    return (
      <Label>
        <GeosuggestStyled
          innerRef={el=>this._geoSuggest=el}
          country="ca"
          placeholder={placeholder}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onSuggestSelect={onSelect}
          onChange={this.handleOnChange}
          initialValue={initialValue}
        />
        <FocusBorder focused={this.state.focused}/>
      </Label>
    );
  }
}


AddressAutoComplete.defaultProps = {
  onSelect: () => {},
  placeholder: 'Search place',
  initialValue: ''
};

export default AddressAutoComplete;
