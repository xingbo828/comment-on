import styled from 'styled-components';

export default styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-right: 1.5rem;
  padding-left: 1.5rem;

  ${props => props.overlap && `
    &:before {
      content: '';
      position: absolute;
      z-index: -1;
      left: 0;
      right: 0;
      height: 2rem;
      background: ${props.theme.colors.offWhite};
    }
  `}

  ${props=>props.theme.media.greaterThan('xs')`
    ${!props.fluid && `max-width: 576px`};
  `}

  ${props=>props.theme.media.greaterThan('sm')`
    ${!props.fluid && `max-width: 768px`};
  `}

  ${props=>props.theme.media.greaterThan('md')`
    ${!props.fluid && `max-width: 992px`};
  `}

  ${props=>props.theme.media.greaterThan('lg')`
    ${!props.fluid && `max-width: 1200px`};
  `}
`;

