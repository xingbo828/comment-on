import React, { Component } from 'react';
import Radio from './Radio';
import { oneOf, func, string } from 'prop-types';
import {
  Container,
  RadioGroupLabel,
  RadioList
} from './Styled';

class RadioGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.value || ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.renderRadioOnlyChildren = this.renderRadioOnlyChildren.bind(this);
    this.renderWildChildren = this.renderWildChildren.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      selected: event.target.value
    });
    this.props.onChange(event, event.target.value);
  };

  renderRadioOnlyChildren(children) {
    return React.Children.map(children, (option) => {
      const {
        value,
        label,
        ...other
      } = option.props;

      return (
        <Radio
          {...other}
          value={option.props.value}
          label={option.props.label}
          onCheck={this.handleChange}
          checked={option.props.value === this.state.selected}
        />
      );
    }, this);
  }

  renderWildChildren(children) {
    return React.Children.map(children, (C) => {
      const {
        value,
        ...other
      } = C.props;
      return React.cloneElement(C, {
        onCheck: this.handleChange,
        checked: value === this.state.selected,
        ...other
      })
    }, this);
  }

  renderChildren(type, children) {
    if(type === 'radio') {
      return this.renderRadioOnlyChildren(children);
    }
    else {
      return this.renderWildChildren(children);
    }
  }


  render() {
    return (
      <Container>
        <RadioGroupLabel>
          {this.props.label}
        </RadioGroupLabel>
        <RadioList childType={this.props.childType}>{this.renderChildren(this.props.childType, this.props.children)}</RadioList>
      </Container>
    );
  }
};

RadioGroup.propTypes = {
  onChange: func.isRequired,
  value: string,
  childType: oneOf(['wild', 'radio'])
};

RadioGroup.defaultProps = {
  childType: 'radio'
}

export default RadioGroup;
