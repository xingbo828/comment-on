import React, { Component } from 'react';
import { array, string, object, func } from 'prop-types';
import reduce from 'lodash/reduce';
import { Legend, ItemQuantity } from '../../../../../../globalComponents/Form';
import { StyledContainer } from './Styled';


class ItemsCount extends Component {

  constructor(props) {
    super(props);
    this.state = this.initState(this.props.value, this.props.configs);
  };

  initState = (value, configs) => {
    return configs.map(c => c.title).reduce((accu, curr) => {
      accu[curr] = value[curr] || 0;
      return accu;
    }, {});
  }

  getSelectedValue = (label) => {
    const key = label;
    return this.state[key] ? this.state[key] : 0
  };

  onOptionSelect = (name, value) => {
    const setState = (name, value) => (prevState, props) => ({[name]: value});
    this.setState(setState(name, value), () => {
      const output = reduce(this.state, (result, value, key) => {
        if(value === 0) {
          return result;
        }
        result[key] = value;
        return result;
      }, {});

      this.props.onChange(output);
    });
  }

  renderChild = (c) => {
    return (
      <ItemQuantity.ItemQuantity key={c.title}
        image={c.image}
        title={c.title}
        unit="Quantity"
        value={this.getSelectedValue(c.title)}
        onChange={this.onOptionSelect}
      />
    );
  }
  render() {
    const { label, configs } = this.props;
    return (
      <StyledContainer>
        <Legend>
          {label}
        </Legend>
        <ItemQuantity.ItemQuantityList>
          {configs.map(c => this.renderChild(c))}
        </ItemQuantity.ItemQuantityList>
      </StyledContainer>
    );
  }
}

ItemsCount.propTypes = {
  value: object.isRequired,
  configs: array.isRequired,
  label: string,
  onChange: func.isRequired
};

ItemsCount.defaultProps = {
  configs: [],
  value: {}
};

export default ItemsCount;
