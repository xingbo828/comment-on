import styled from 'styled-components';


const calculateBasis = (ratio) => ratio ? `flex-basis: ${ratio*100/24}%` : 'flex-basis: 100%';

const calculateOffset = (offsetRatio) => {
  if(offsetRatio) {
    const perc = offsetRatio*100/24;
    return `margin-left: ${perc}%`;
  }
};

export default styled.div`
  flex-basis: 100%;
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
