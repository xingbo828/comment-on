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
  }

  handleFocus() {
    this.setState({
      focused: true
    });
  }

  handleBlur() {
    this.setState({
      focused: false
    });
  }

  render() {
    const { initialValue, onSelect, placeholder, label } = this.props;
    return (
      <Label>
        <GeosuggestStyled
          country="ca"
          placeholder={placeholder}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onSuggestSelect={onSelect}
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
