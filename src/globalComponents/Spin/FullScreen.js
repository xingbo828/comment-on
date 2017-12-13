import React, { Component } from 'react';
import { number } from 'prop-types';
import BounceLoading from 'respinner/lib/bounce';
import { withTheme } from 'styled-components';
import { FullScreenWrapper, FullScreenDrop, SpinWrapper } from './Styles';

class FullScreenSpinner extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      spinning: false
    };
  }

  componentDidMount() {
    const delay = this.props.delay;
    this.delayTimeout = setTimeout(() => {
      this.setState({ spinning: true });
    }, delay);
  }

  componentWillUnmount() {
    if (this.delayTimeout) {
      clearTimeout(this.delayTimeout);
    }
  }

  render() {
    const { theme } = this.props;
    const { spinning } = this.state;
    if (!spinning) {
      return null;
    }
    return (
      <FullScreenWrapper>
        <SpinWrapper>
          <BounceLoading
            fill={theme.colors.primary}
            count={5}
            gap={5}
            barWidth={6}
            barHeight={26}
          />
        </SpinWrapper>
        <FullScreenDrop />
      </FullScreenWrapper>
    );
  }
}

FullScreenSpinner.propTypes = {
  /**
    delay (millseconds): specifies a delay in milliseconds
    for loading state (prevent flush)
  */
  delay: number.isRequired
};

FullScreenSpinner.defaultProps = {
  delay: 0
};

export default withTheme(FullScreenSpinner);
