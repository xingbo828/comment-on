import React from 'react';
import BounceLoading from 'respinner/lib/bounce';
import { withTheme } from 'styled-components';
import {
  StyleContainer,
  ChildrenBlurWrapper,
  SpinnerWrapper,
  SpinnerWrapperInner
} from './Styles';

const SpinContainer = ({ children, loading, theme }) => {
  return (
    <StyleContainer>
      {loading && <SpinnerWrapper>
        <SpinnerWrapperInner>
          <BounceLoading
            fill={theme.colors.primary}
            count={5}
            gap={3}
            barWidth={4}
            barHeight={12}
          />
        </SpinnerWrapperInner>
      </SpinnerWrapper>}
      <ChildrenBlurWrapper loading={loading}>{children}</ChildrenBlurWrapper>
    </StyleContainer>
  );
};

export default withTheme(SpinContainer);
