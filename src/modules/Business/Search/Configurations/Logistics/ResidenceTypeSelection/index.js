import React, { Component } from 'react';
import { func, string } from 'prop-types';
import { Radio } from '../../../../../../globalComponents/Form';
import Animation from '../../../../../../globalComponents/Animation';

import {
  ResidenceTypeSelectionContainer,
  ResidenceTypeContainer,
  ResidenceType,
  ChildrenTypeContainer,
  ChildContainer,
  Label
} from './Styled';

class ResidenceTypeSelection extends Component {
  constructor(props) {
    super(props);
    this.configs = [
      {
        label: 'Apartment',
        value: 'apartment',
        children: [
          {
            label: 'Up to 500 sqft',
            value: 'apartment | 500 sqft'
          },
          {
            label: 'Up to 750 sqft',
            value: 'apartment | 750 sqft'
          },
          {
            label: 'Up to 1000 sqft',
            value: 'apartment | 1000 sqft'
          }
        ]
      },
      {
        label: 'Loft/Multi-Level Condo',
        value: 'condo',
        children: [
          {
            label: 'Up to 500 sqft',
            value: 'condo | 500 sqft'
          },
          {
            label: 'Up to 750 sqft',
            value: 'condo | 750 sqft'
          },
          {
            label: 'Up to 1000 sqft',
            value: 'condo | 1000 sqft'
          }
        ]
      }
    ];

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

  onTopLvRadioSelection = e => {
    const setState = value => (prevState, props) => ({ type: value, child: '' });
    this.setState(setState(e.target.value));
    this.props.onChange('');
  };

  isTopLvSelected = value => {
    return value === this.state.type;
  };

  onChildLvRadioSelect = e => {
    const setState = value => (prevState, props) => ({ child: value });
    this.setState(setState(e.target.value));
    this.props.onChange(e.target.value);
  };

  isChildLvSelected = (value) => {
    return value === this.state.child;
  }

  renderType = type => {
    return (
      <ResidenceType key={type.value}>
        <Radio.Radio
          value={type.value}
          label={type.label}
          checked={this.isTopLvSelected(type.value)}
          onCheck={this.onTopLvRadioSelection}
        />
        <Animation.Reveal
          timeout={300}
          height={type.children.length * 40}
          in={this.isTopLvSelected(type.value)}
        >
          {() => (
            <ChildrenTypeContainer>
              {this.renderTypeChildren(type.children, type.value)}
            </ChildrenTypeContainer>
          )}
        </Animation.Reveal>
      </ResidenceType>
    );
  };

  renderTypeChildren = (children) => {
    return children.map(c => (
      <ChildContainer key={c.value}>
        <Radio.Radio
          value={c.value}
          label={c.label}
          color="#1d407f"
          checked={this.isChildLvSelected(c.value)}
          onCheck={this.onChildLvRadioSelect}
        />
      </ChildContainer>
    ));
  };

  render() {
    const { label } = this.props;
    return (
      <ResidenceTypeSelectionContainer>
        <Label>{label}</Label>
        <ResidenceTypeContainer>
          {this.configs.map(c => this.renderType(c))}
        </ResidenceTypeContainer>
      </ResidenceTypeSelectionContainer>
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
