import React, { Component } from 'react';
import { array, string, object, func } from 'prop-types';
import camelCase from 'lodash/camelCase';
import reduce from 'lodash/reduce';
import { Select } from '../../../../../../globalComponents/Form';
import {
  StyledContainer,
  Label,
  StyledItems,
  StyledItem,
  Desc
} from './Styled';

class ItemsCount extends Component {
  constructor(props) {
    super(props);
    this.state = this.initState(this.props.value, this.props.configs);
  };

  initState = (value, configs) => {
    return configs.map(camelCase).reduce((accu, curr) => {
      accu[curr] = value[curr] || 0;
      return accu;
    }, {});
  }

  getSelectedValue = (label) => {
    const key = camelCase(label);
    return this.state[key] ? this.state[key] : 0
  };

  onOptionSelect = (e) => {
    const { value, name } = e.target;
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
      <StyledItem key={c}>
        <Select
          label={c}
          value={this.getSelectedValue(c)}
          name={camelCase(c)}
          onChange={this.onOptionSelect}
        >
          {Array(6).fill('').map((e, index) => {
            const current = index === 5 ? '5+' : index;
            return (
              <option key={`${c}-${index}`} value={current}>
                {current}
              </option>
            );
          })}
        </Select>
      </StyledItem>
    );
  }
  render() {
    const { label, desc, configs } = this.props;
    return (
      <StyledContainer>
        <Label>
          {label}
        </Label>
        {desc && <Desc>
          {desc}
        </Desc>}
        <StyledItems>
          {configs.map(c => this.renderChild(c))}
        </StyledItems>
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
