import styled from 'styled-components';

export default styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-right: 15px;
  padding-left: 15px;


  ${props => props.overlap && `
    margin: -4rem auto;
    padding: 0 0 4rem;
  `}

  ${props => !props.fluid && `
    max-width: 1200px;
  `}

  ${props => !props.fluid && props.small && `
    max-width: 768px;
  `}
`;

