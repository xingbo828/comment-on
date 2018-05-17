import styled from 'styled-components';

export default styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-right: 1rem;
  padding-left: 1rem;


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

  ${props => !props.fluid && `
    max-width: 1200px;
  `}

  ${props => !props.fluid && props.small && `
    max-width: 768px;
  `}
`;

