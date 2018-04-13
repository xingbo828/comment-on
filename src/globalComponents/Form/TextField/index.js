import React from 'react';
import { Label } from '../Label';
import {
  InputContainer,
  Input,
  FocusBorder,
  InputErrorMsg
} from './Styled'

class TextField extends React.Component {

  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.isFilled = this.isFilled.bind(this)
    this.state = {
      isFocused: false
    }
  }

  onFocus() {
    this.setState({ isFocused: true });
  }

  onBlur() {
    this.setState({ isFocused: false });
  }

  onChange(e) {
    const isFilled = !!e.target.value.length
    console.log(this.props.meta)
    this.setState({ isFilled })
    this.props.input.onChange(e)
  }

  isFilled() {
    return !!this.props.input.value.length
  }

  render() {
    const { label, type, autoComplete, placeholder, input, meta: { touched, error }} = this.props;

    return (
      <InputContainer>
        {label &&
          <Label 
            focused={this.state.isFocused}
            filled={this.isFilled()}
          >
            {label}
          </Label>
        }
        <Input
          value={input.value} 
          onChange={this.onChange}
          type={type} onFocus={this.onFocus.bind(this)}
          onBlur={this.onBlur.bind(this)} 
          autoComplete={autoComplete} 
          placeholder={placeholder}
          ref={(ref)=>this.ref=ref}
        />
        <FocusBorder />
        {touched &&
        ((error &&
          <InputErrorMsg>
            {error}
          </InputErrorMsg>))}
      </InputContainer>
    );
  }
};


TextField.defaultProps = {
  meta: {},
  placeholder: '',
  label: '',
  type: 'text',
  autoComplete: 'on'
};

export default TextField;


