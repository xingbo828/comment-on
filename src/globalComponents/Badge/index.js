import React, { Component } from 'react';
import { bool, number} from 'prop-types';
import BadgeTransition from './BadgeTransition';

import {
  BadgeContainer,
  BadgeDotSup,
  BadgeNumSup
} from './Styled';

class Badge extends Component {
  renderSup(type, dot, count) {
    if(type === 'dot') {
      return (
        <BadgeTransition in={dot} type="dot">
          {()=><BadgeDotSup />}
        </BadgeTransition>
      );
    } else if(type === 'count') {
      return (
        <BadgeTransition in={count > 0}>
          {()=><BadgeNumSup>
            {count > 0 ? (count > 99 ? '99+' : count) : null}
            </BadgeNumSup>}
        </BadgeTransition>
      );
    }
    return null;
  }

  render() {
    const { dot, children, count } = this.props;
    const type = (typeof dot !== 'undefined') ? 'dot' : 'count';
    return (
      <BadgeContainer>
        {children}
          {this.renderSup(type, dot, count)}
      </BadgeContainer>
    );
  }
}

Badge.propTypes = {
  dot: bool,
  count: number
};

export default Badge;
