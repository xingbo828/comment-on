import React, { Component } from 'react';
import { func, string } from 'prop-types';
import { Select, Legend } from '../../../../../../globalComponents/Form';
import { RadioList, RadioListItem } from '../../../../../../globalComponents/Form/RadioNew';
import { stairsConfig, elevatorNoStairConfig, mainFloorConfig } from './configs';
import { StyledContainer } from './Styled';


class DeliveryAccess extends Component {
  constructor(props) {
    super(props);
    this.stairsConfig = stairsConfig;
    this.elevatorNoStairConfig = elevatorNoStairConfig;
    this.mainFloorConfig = mainFloorConfig;
    this.state = {
      value: props.value
    };
  }

  selectStairs = value => {
    let changeValue =
    value === 'stairs'
        ? this.stairsConfig[0].value
        : value;
    const setState = () => (prevState, props) => ({
      value: changeValue
    });
    this.setState(setState());
    this.props.onChange(changeValue);
  };

  onOptionSelect = e => {
    const setState = (value) => (prevState, props) => ({
      value
    });
    this.setState(setState(e.target.value));
    this.props.onChange(e.target.value);
  };

  render() {
    const { label } = this.props;
    const { value } = this.state;
    return (
      <StyledContainer>
        <Legend>{label}</Legend>
        <RadioList>
          <RadioListItem
            label="Stairs"
            value="stairs"
            checked={value.startsWith('stairs')}
            onCheck={this.selectStairs}
          >
            <Select
              label="Floor"
              value={value}
              name="Floors"
              onChange={this.onOptionSelect}
            >
              {this.stairsConfig.map(c => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </Select>
          </RadioListItem>
          <RadioListItem
            label={this.elevatorNoStairConfig.label}
            value={this.elevatorNoStairConfig.value}
            checked={value === elevatorNoStairConfig.value}
            onCheck={this.selectStairs}
          />
          <RadioListItem
            label={this.mainFloorConfig.label}
            value={this.mainFloorConfig.value}
            checked={value === mainFloorConfig.value}
            onCheck={this.selectStairs}
          />
        </RadioList>
      </StyledContainer>
    );
  }
}

DeliveryAccess.propTypes = {
  onChange: func.isRequired,
  value: string.isRequired,
  label: string.isRequired
};

DeliveryAccess.defaultProps = {
  value: ''
};

export default DeliveryAccess;
