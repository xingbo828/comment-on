import React from 'react';
import { Label } from '../Label';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import {
  Container,
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
    this.setState(() => ({ isFocused: true }));
  }

  onBlur(e) {
    if(this.props.input.onBlur) {
      this.props.input.onBlur(e);
    }
    this.setState(() => ({ isFocused: false }));
  }

  onChange(e) {
    const isFilled = !!e.target.value.length
    this.props.input.onChange(e)
    this.setState(() => ({ isFilled }))
  }

  isFilled() {
    return !isEmpty(get(this.props,['input','value']))
  }

  render() {
    const { label, type, autoComplete, placeholder, input, meta: { touched, error }} = this.props;
    return (
      <Container>
        <Label
          focused={this.state.isFocused}
          filled={this.isFilled()}
        >
          {label}
        </Label>
        <InputContainer
          error={!!error && touched}
        >
          <Input
            value={input.value}
            onChange={this.onChange}
            type={type} onFocus={this.onFocus.bind(this)}
            onBlur={this.onBlur.bind(this)}
            autoComplete={autoComplete}
            placeholder={placeholder}
            filled={this.isFilled()}
            ref={(ref)=>this.ref=ref}
          />
          <FocusBorder filled={this.isFilled()} />
        </InputContainer>
        <InputErrorMsg active={!!error && touched}>
          {error}
        </InputErrorMsg>
      </Container>
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


