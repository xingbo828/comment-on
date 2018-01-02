import React, { Component } from 'react';
import { bool, number} from 'prop-types';
import BadgeTransition from './BadgeTransition';

import {
  BadgeContainer,
  BadgeDotSup,
  BadgeNumSup
} from './Styled';

class Badge extends Component {
  renderSup(type, dot, count, offsetX, offsetY) {
    if(type === 'dot') {
      return (
        <BadgeTransition in={dot} type="dot">
          {()=><BadgeDotSup offsetX={offsetX} offsetY={offsetY} />}
        </BadgeTransition>
      );
    } else if(type === 'count') {
      return (
        <BadgeTransition in={count > 0}>
          {()=><BadgeNumSup offsetX={offsetX} offsetY={offsetY}>
            {count > 0 ? (count > 99 ? '99+' : count) : null}
            </BadgeNumSup>}
        </BadgeTransition>
      );
    }
    return null;
  }

  render() {
    const { dot, offsetX, offsetY, children, count } = this.props;
    const type = (typeof dot !== 'undefined') ? 'dot' : 'count';
    return (
      <BadgeContainer>
        {children}
          {this.renderSup(type, dot, count, offsetX, offsetY)}
      </BadgeContainer>
    );
  }
}

Badge.propTypes = {
  dot: bool,
  count: number,
  offsetX: number.isRequired,
  offsetY: number.isRequired
};

Badge.defaultProps = {
  offsetX: 0,
  offsetY: 0
};
export default Badge;
