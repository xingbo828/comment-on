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

  render() {
    const { label, type, autoComplete, placeholder, input, meta: { touched, error }} = this.props;

    return (
      <InputContainer>
        {label && <Label highlight={this.state.isFocused}>
          {label}
        </Label>}
        <Input {...input} type={type} onFocus={this.onFocus.bind(this)} onBlur={this.onBlur.bind(this)} autoComplete={autoComplete} placeholder={placeholder}/>
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


