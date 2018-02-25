import styled from 'styled-components';
import isUndefined from 'lodash/isUndefined';
const calculateBasis = (ratio) => !isUndefined(ratio) ? `flex: 0 0 ${ratio*100/24}%` : 'flex: 0 0 100%';

const calculateOffset = (offsetRatio) => {
  if(!isUndefined(offsetRatio)) {
    const perc = offsetRatio*100/24;
    return `margin-left: ${perc}%`;
  }
};

const calculateDisplay = (ratio) => (!isUndefined(ratio) && ratio === 0) && 'display: none';

export default styled.div`
  padding: 0 1rem;
  ${props=>props.theme.media.lessThan('xs')`
    ${calculateDisplay(props.xs)};
    ${calculateBasis(props.xs)};
    ${calculateOffset(props.xsOffset)};
  `}

  ${props=>props.theme.media.between('xs', 'sm')`
    ${calculateDisplay(props.sm)};
    ${calculateBasis(props.sm)};
    ${calculateOffset(props.smOffset)};
  `}

  ${props=>props.theme.media.between('sm', 'md')`
    ${calculateDisplay(props.md)};
    ${calculateBasis(props.md)};
    ${calculateOffset(props.mdOffset)};
  `}

  ${props=>props.theme.media.greaterThan('md')`
    ${calculateDisplay(props.lg)};
    ${calculateBasis(props.lg)};
    ${calculateOffset(props.lgOffset)};
  `}
`;
