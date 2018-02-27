import styled from 'styled-components';

export default styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-right: 1rem;
  padding-left: 1rem;


  ${props => props.overlap && `
    margin: -4rem auto;
  `}

  ${props => !props.fluid && `
    max-width: 1200px;
  `}

  ${props => !props.fluid && props.small && `
    max-width: 768px;
  `}
`;

