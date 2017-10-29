import React, { Component } from 'react';
import { number, string, oneOf, func, bool } from 'prop-types';
import Icon from '../Icon';
import {
  RateIconList,
  RateIcon
} from './Styled';

class Rate extends Component {
  state={
    value: this.props.value,
    hoverValue: 0,
    isHovering: false
  };

  handleMouseEnter = (value, readOnly) => (e) => {
    if(readOnly) {
      return;
    }
    this.setState({
      isHovering: true,
      hoverValue: value + 1
    });
  }

  handleMouseLeave = (readOnly) => (e) => {
    if(readOnly) {
      return;
    }
    this.setState({
      isHovering: false
    });
  }

  handleClick = (value, readOnly) => (e) => {
    if(readOnly) {
      return;
    }
    const newValue = value + 1;
    this.setState({
      isHovering: false,
      value: newValue
    });
    this.props.onChange(newValue);
  }

  renderStars = (value, icon, size, readOnly) => {
    return Array(5).fill('').map((empty, index) => {
      if(value >= index + 1){
        return (
          <RateIcon
            onClick={this.handleClick(index, readOnly)}
            onMouseEnter={this.handleMouseEnter(index, readOnly)}
            onMouseLeave={this.handleMouseLeave(readOnly)}
            key={index}
            full
            readOnly={readOnly}
          >
          <Icon icon={icon} size={size} />
        </RateIcon>
        );
      } else if(value < index){
        return (
          <RateIcon
            onClick={this.handleClick(index, readOnly)}
            onMouseEnter={this.handleMouseEnter(index, readOnly)}
            onMouseLeave={this.handleMouseLeave(readOnly)}
            key={index}
            empty
            readOnly={readOnly}
          >
            <Icon icon={icon} size={size} />
          </RateIcon>
        );
      } else {
        const percent = value%1*100;
        return (
          <RateIcon
            onClick={this.handleClick(index, readOnly)}
            onMouseEnter={this.handleMouseEnter(index, readOnly)}
            onMouseLeave={this.handleMouseLeave(readOnly)}
            key={index}
            percent={percent}
            readOnly={readOnly}
          >
            <Icon icon={icon} size={size} />
            <Icon icon={icon} size={size} />
          </RateIcon>
        );
      }
    });
  }

  render() {
    const { value, isHovering, hoverValue } = this.state;
    const { icon, size, readOnly } = this.props;
    const renderValue = isHovering ? hoverValue : value;
    return (
      <RateIconList>
        {this.renderStars(renderValue, icon, size, readOnly)}
      </RateIconList>
    );
  }
}

Rate.propTypes = {
  value: number,
  icon: string,
  /** Size of the icons: sm or lg */
  size: oneOf(['sm', 'lg']),
  onChange: func,
  readOnly: bool
};

Rate.defaultProps = {
  value: 0,
  size: 'sm',
  icon: 'star',
  readOnly: true
};

export default Rate;
