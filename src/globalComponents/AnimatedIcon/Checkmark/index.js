import React from 'react';
import { withTheme } from 'styled-components'
import {
  SvgWrapper
} from './Styled';

const AnimatedCheckmark = ({theme, style}) => {
  return (
      <SvgWrapper xmlns="http://www.w3.org/2000/svg" style={style} viewBox="0 0 72 72">
        <g fill="none" stroke={theme.colors.success}>
          <circle
            viewBox
            cx="36"
            strokeWidth="1"
            cy="36"
            r="35"
            style={{strokeDasharray:'240px, 240px', strokeDashoffset: '480px'}}
          />
          <path
            strokeWidth="6"
            d="M17.417,37.778l9.93,9.909l25.444-25.393"
            style={{strokeDasharray: '50px, 50px',  strokeDashoffset: '0px'}}
          />
        </g>
      </SvgWrapper>
  );
};

export default withTheme(AnimatedCheckmark);
