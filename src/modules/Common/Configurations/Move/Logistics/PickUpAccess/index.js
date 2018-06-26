import React, { Component } from 'react';
import { func, string } from 'prop-types';
import { Select, Legend } from '../../../../../../globalComponents/Form';
import { RadioList, RadioListItem } from '../../../../../../globalComponents/Form/RadioNew';
import Animation from '../../../../../../globalComponents/Animation';
import { stairsConfig, elevatorNoStairConfig, mainFloorConfig } from './configs';
import { StyledContainer } from './Styled';
class DeliveryAccess extends Component {
  constructor(props) {
    super(props);
    this.stairsConfig = stairsConfig;
    this.elevatorNoStairConfig = elevatorNoStairConfig;
    this.mainFloorConfig = mainFloorConfig;

    this.state = {
      value: this.props.value,
      hasStairs:
        this.props.value === ''
          ? null
          : this.props.value === this.elevatorNoStairConfig.value ? false : true
    };
  }

  selectStairs = e => {
    let changeValue =
      e.target.value === 'stairs'
        ? this.stairsConfig[0].value
        : e.target.value;
    const setState = value => (prevState, props) => ({
      hasStairs: value === 'stairs',
      value: changeValue
    });
    this.setState(setState(e.target.value));
    this.props.onChange(changeValue);
  };

  onOptionSelect = e => {
    const setState = value => (prevState, props) => ({
      value
    });
    this.setState(setState(e.target.value));
    this.props.onChange(e.target.value);
  };

  render() {
    const { label } = this.props;
    const { value, hasStairs } = this.state;
    return (
      <StyledContainer>
        <Legend>{label}</Legend>
        <RadioList>
          <RadioListItem
            label="Stairs"
            value="stairs"
            checked={hasStairs === true}
            onCheck={this.selectStairs}
          >
            <Animation.Reveal timeout={300} height={50} in={hasStairs}>
              {() => (
                <Select
                  label="Floors"
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
              )}
            </Animation.Reveal>
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
