import React, { Component } from 'react';
import { bool, number} from 'prop-types';
import BadgeTransition from './BadgeTransition';

import {
  BadgeContainer,
  BadgeDotSup,
  BadgeNumSup
} from './Styled';

class Badge extends Component {
  renderSup(type, dot, count, offsetX, offsetY, scale) {
    if(type === 'dot') {
      return (
        <BadgeTransition in={dot} type="dot" scale={scale}>
          {()=><BadgeDotSup offsetX={offsetX} offsetY={offsetY} />}
        </BadgeTransition>
      );
    } else if(type === 'count') {
      return (
        <BadgeTransition in={count > 0} offsetX={offsetX} offsetY={offsetY} scale={scale}>
          {()=><BadgeNumSup offsetX={offsetX} offsetY={offsetY}>
            {count > 0 ? (count > 99 ? '99+' : count) : null}
            </BadgeNumSup>}
        </BadgeTransition>
      );
    }
    return null;
  }

  render() {
    const { dot, offsetX, offsetY, scale, children, count } = this.props;
    const type = (typeof dot !== 'undefined') ? 'dot' : 'count';
    return (
      <BadgeContainer>
        {children}
          {this.renderSup(type, dot, count, offsetX, offsetY, scale)}
      </BadgeContainer>
    );
  }
}

Badge.propTypes = {
  dot: bool,
  count: number,
  offsetX: number.isRequired,
  offsetY: number.isRequired,
  scale: number.isRequired
};

Badge.defaultProps = {
  offsetX: 0,
  offsetY: 0,
  scale: 1
};
export default Badge;
