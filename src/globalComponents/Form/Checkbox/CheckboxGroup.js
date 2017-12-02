import React, { Component } from 'react';
import { func, string, shape, array, bool } from 'prop-types';
import Checkbox from './Checkbox';
import { Container, CheckboxList, InputErrorMsg, CheckboxGroupLabel } from './Styled';

class CheckboxGroup extends Component {
  constructor(props){
    super(props);
    this.state = {
      checked: props.value
    };
    this.isChecked = this.isChecked.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  isChecked(value) {
    return this.state.checked.includes(value);
  }

  handleChange(e) {
    let newState;

    if(this.state.checked.includes(e.target.value)){
      // remove
      newState = this.state.checked.filter((item) => item !== e.target.value)
    } else {
      newState =  this.state.checked.concat([e.target.value])
    }
    this.setState({
      checked: newState
    });
    this.props.onChange(newState);
  }

  render() {
    const options = React.Children.map(this.props.children, (option) => {
      const {
        value,
        label,
        name,
        ...other
      } = option.props;

      return (
        <Checkbox
          {...other}
          value={value}
          label={label}
          name={name}
          onChange={this.handleChange}
          checked={this.isChecked(value)}
        />
      );
    }, this);
    const { label, meta: { touched, error }} = this.props;
    return (
      <Container>
        <CheckboxGroupLabel>
          {label}
        </CheckboxGroupLabel>
        <CheckboxList>{options}</CheckboxList>
        {touched &&
          ((error &&
            <InputErrorMsg>
              {error}
            </InputErrorMsg>))}
      </Container>
    );

  }
};

CheckboxGroup.defaultProps = {
  meta: {},
  value: []
}

CheckboxGroup.propTypes = {
  label: string,
  name: string.isRequired,
  value: array,
  onChange: func.isRequired,
  meta: shape({
    touched: bool,
    error: string
  })
};

export default CheckboxGroup;
