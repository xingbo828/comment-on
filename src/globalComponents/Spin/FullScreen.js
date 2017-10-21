import React from 'react';
import BounceLoading from 'respinner/lib/bounce';
import { withTheme } from 'styled-components'
import {
  FullScreenWrapper,
  FullScreenDrop,
  SpinWrapper
} from './Styles';

const FullScreenSpinner = ({theme}) => {
  return (
    <FullScreenWrapper>
      <SpinWrapper><BounceLoading fill={theme.colors.primary} count={5} gap={5} barWidth={6} barHeight={26}/></SpinWrapper>
      <FullScreenDrop />
    </FullScreenWrapper>
  );
};

export default withTheme(FullScreenSpinner);
