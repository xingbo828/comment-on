import React, { Component } from 'react';
import { func, string } from 'prop-types';
import { Select, Legend } from '../../../../../../globalComponents/Form';
import { RadioList, RadioListItem } from '../../../../../../globalComponents/Form/RadioNew';
import { storageConfig, noStorageConfig } from './configs';


class StorageSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  selectStorage = value => {
    let changeValue =
    value === 'stairs'
        ? storageConfig[0].value
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
      <React.Fragment>
        <Legend>{label}</Legend>
        <RadioList>
          <RadioListItem
            label="Yes"
            value="stairs"
            checked={value.indexOf('storage') > -1}
            onCheck={this.selectStorage}
          >
            <Select
              label="Night(s) of storage"
              value={value}
              name="days"
              onChange={this.onOptionSelect}
            >
              {storageConfig.map(c => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </Select>
          </RadioListItem>
          <RadioListItem
            label={noStorageConfig.label}
            value={noStorageConfig.value}
            checked={value === noStorageConfig.value}
            onCheck={this.selectStorage}
          />
        </RadioList>
      </React.Fragment>
    );
  }
}

StorageSelection.propTypes = {
  onChange: func.isRequired,
  value: string.isRequired,
  label: string.isRequired
};

StorageSelection.defaultProps = {
  value: ''
};

export default StorageSelection;
