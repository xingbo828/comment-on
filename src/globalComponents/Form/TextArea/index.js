import React from 'react';
import { Label } from '../Label';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import {
  Container,
  InputContainer,
  TextArea,
  FocusBorder,
  InputErrorMsg
} from './Styled'

class TextField extends React.Component {

  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.isFilled = this.isFilled.bind(this)
    this.adjustHeight = this.adjustHeight.bind(this)
    this.state = {
      isFocused: false
    }
  }

  componentDidMount() {
    this.adjustHeight()
  }

  onFocus() {
    this.setState(() => ({ isFocused: true }));
  }

  onBlur() {
    this.setState(() => ({ isFocused: false }));
  }

  adjustHeight() {
    this.textArea.style.height = '5px'
    this.textArea.style.height = `${this.textArea.scrollHeight}px`
    this.forceUpdate()
  }

  onChange(e) {
    const isFilled = !!e.target.value.length
    this.setState(() => ({ isFilled }))
    this.adjustHeight()
    this.props.input.onChange(e)
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
        <InputContainer error={!!error && touched}>
          <TextArea
            value={input.value}
            innerRef={(comp)=> { this.textArea = comp }}
            onChange={this.onChange}
            type={type} onFocus={this.onFocus.bind(this)}
            onBlur={this.onBlur.bind(this)}
            autoComplete={autoComplete}
            placeholder={placeholder}
            ref={(ref)=>this.ref=ref}
            filled={this.isFilled()}
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


