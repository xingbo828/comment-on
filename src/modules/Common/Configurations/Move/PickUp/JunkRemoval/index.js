import React, { Component } from 'react';
import { func, string } from 'prop-types';
import { Legend } from '../../../../../../globalComponents/Form';
import { RadioList, RadioListItem } from '../../../../../../globalComponents/Form/RadioNew';
import ParkingConfig from './configs';
import { StyledContainer } from './Styled';


class JunkRemoval extends Component {
  constructor(props) {
    super(props);
    this.mapFields = this.mapFields.bind(this)
  }


  mapFields() {
    const { value : currentValue } = this.props;
    return ParkingConfig.map(({ label, value }) => (
      <RadioListItem
        label={label}
        value={value}
        checked={currentValue === value}
        onCheck={this.props.onChange}
      />
    ))
  }

  render() {
    const { label } = this.props;
    return (
      <StyledContainer>
        <Legend>{label}</Legend>
        <RadioList>
          {this.mapFields()}
        </RadioList>
      </StyledContainer>
    );
  }
}

JunkRemoval.propTypes = {
  onChange: func.isRequired,
  value: string.isRequired,
  label: string.isRequired
};

JunkRemoval.defaultProps = {
  value: ''
};

export default JunkRemoval;
