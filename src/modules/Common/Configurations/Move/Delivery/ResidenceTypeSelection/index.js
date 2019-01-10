import React, { Component } from 'react';
import { func, string } from 'prop-types';
import Legend from '../../../../../../globalComponents/Form/Legend'
import {
  Radio,
  RadioListItem,
  RadioList 
} from '../../../../../../globalComponents/Form/RadioNew';
import configs from './configs';

class ResidenceTypeSelection extends Component {
  constructor(props) {
    super(props);
    this.configs = configs;

    this.state = this.initState(this.configs, this.props.value);
  }

  initState = (configs, value) => {
    const type = configs.find((type) => type.children.find((c) => c.value === value));
    return type ? {
      type: type.value,
      child: value
    } : {
      type: '',
      child: ''
    }
  };

  onTopLvRadioSelection = value => {
    const setState = value => (prevState, props) => ({ type: value, child: '' });
    this.setState(setState(value));
    this.props.onChange('');
  };

  isTopLvSelected = value => {
    return value === this.state.type;
  };

  onChildLvRadioSelect = value => {
    const setState = () => (prevState, props) => ({ child: value });
    this.setState(setState(value));
    this.props.onChange(value);
  };

  isChildLvSelected = (value) => {
    return value === this.state.child;
  }

  renderType = type => {
    return (
      <RadioListItem
        value={type.value}
        label={type.label}
        checked={this.isTopLvSelected(type.value)}
        onCheck={this.onTopLvRadioSelection}
      >
        {this.renderTypeChildren(type.children, type.value)}
      </RadioListItem>
    );
  };

  renderTypeChildren = (children) => {
    return children.map(c => (
      <Radio
        value={c.value}
        label={c.label}
        color="#1d407f"
        checked={this.isChildLvSelected(c.value)}
        onCheck={this.onChildLvRadioSelect}
      />
    ));
  };

  render() {
    const { label } = this.props;
    return (
      <div>
        <Legend>{label}</Legend>
        <RadioList>
          {this.configs.map(c => this.renderType(c))}
        </RadioList>
      </div>
    );
  }
}

ResidenceTypeSelection.propTypes = {
  onChange: func.isRequired,
  value: string.isRequired,
  label: string.isRequired
};

ResidenceTypeSelection.defaultProps = {
  value: ''
};

export default ResidenceTypeSelection;
