import styled from 'styled-components';
import isUndefined from 'lodash/isUndefined';
const calculateBasis = (ratio) => !isUndefined(ratio) ? `flex: 0 0 ${ratio*100/24}%` : 'flex: 0 0 100%';

const calculateOffset = (offsetRatio) => {
  if(!isUndefined(offsetRatio)) {
    const perc = offsetRatio*100/24;
    return `margin-left: ${perc}%`;
  }
};

const calculateLast = (size, viewport) => {
  if (size === viewport) {
    return 'order: 1;'
  }
  return null;
}

const calculateFirst = (size, viewport) => {
  if (size === viewport) {
    return 'order: -1;'
  }
  return null;
}

const calculateDisplay = (ratio) => (!isUndefined(ratio) && ratio === 0) && 'display: none';

export default styled.div`
  padding: 0 1.5rem;

  ${props => `
    ${calculateDisplay(props.xs)};
    ${calculateBasis(props.xs)};
    ${calculateOffset(props.xsOffset)};
    ${calculateFirst(props.first, 'xs')}
    ${calculateLast(props.last, 'xs')}
  `}

  ${props=>props.theme.media.greaterThan('xs')`
    ${calculateDisplay(props.sm)};
    ${calculateBasis(props.sm)};
    ${calculateOffset(props.smOffset)};
    ${calculateFirst(props.first, 'sm')}
    ${calculateLast(props.last, 'sm')}
  `}

  ${props=>props.theme.media.greaterThan('sm')`
    ${calculateDisplay(props.md)};
    ${calculateBasis(props.md)};
    ${calculateOffset(props.mdOffset)};
    ${calculateFirst(props.first, 'md')}
    ${calculateLast(props.last, 'md')}
  `}

  ${props=>props.theme.media.greaterThan('md')`
    ${calculateDisplay(props.lg)};
    ${calculateBasis(props.lg)};
    ${calculateOffset(props.lgOffset)};
    ${calculateFirst(props.first, 'lg')}
    ${calculateLast(props.last, 'lg')}
  `}

  ${props=>props.theme.media.greaterThan('lg')`
    ${calculateDisplay(props.xl)};
    ${calculateBasis(props.xl)};
    ${calculateOffset(props.xlOffset)};
    ${calculateFirst(props.first, 'xl')}
    ${calculateLast(props.last, 'xl')}
  `}
`;
