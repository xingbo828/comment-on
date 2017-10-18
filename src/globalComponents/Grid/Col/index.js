import styled from 'styled-components';
import floor from 'lodash/floor';

const calculateBasis = (ratio) => ratio ? `flex: 0 0 ${floor(ratio*100/24, 1)}%` : 'flex: 0 0 100%';

const calculateOffset = (offsetRatio) => {
  if(offsetRatio) {
    const perc = offsetRatio*100/24;
    return `margin-left: ${perc}%`;
  }
};

export default styled.div`
  padding: 0 15px;

  ${props=>props.theme.media.lessThan('xs')`
    ${calculateBasis(props.xs)};
    ${calculateOffset(props.xsOffset)};
  `}

  ${props=>props.theme.media.between('xs', 'sm')`
    ${calculateBasis(props.sm)};
    ${calculateOffset(props.smOffset)};
  `}

  ${props=>props.theme.media.between('sm', 'md')`
    ${calculateBasis(props.md)};
    ${calculateOffset(props.mdOffset)};
  `}

  ${props=>props.theme.media.greaterThan('md')`
    ${calculateBasis(props.lg)};
    ${calculateOffset(props.lgOffset)};
  `}
`;
