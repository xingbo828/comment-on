import React, { Component } from 'react';
import Radio from './Radio';
import { func, string } from 'prop-types';
import Card from '../../Card';
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
  }

  handleChange = (event) => {
    this.setState({
      selected: event.target.value
    });
    this.props.onChange(event, event.target.value);
  };


  render() {
    const options = React.Children.map(this.props.children, (option) => {


      if (option.type === Card) {
        const card = React.Children.map(option.props.children, (child) => {
          if (child.type !== Radio) {
            return (child);
          }
          const {
            value,
            label,
            ...other
          } = child.props;
          return (
            <Radio
              {...other}
              value={child.props.value}
              label={child.props.label}
              onCheck={this.handleChange}
              checked={child.props.value === this.state.selected}
            />
          );
        });
        return (
          <Card offset="0" style={{float: 'left'}}>
            {card}
          </Card>
        );
      }
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

    return (
      <Container>
        <RadioGroupLabel>
          {this.props.label}
        </RadioGroupLabel>
        <RadioList>{options}</RadioList>
      </Container>
    );
  }
};

RadioGroup.propTypes = {
  onChange: func.isRequired,
  value: string
};

export default RadioGroup;
