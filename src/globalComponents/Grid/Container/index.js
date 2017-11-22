import styled from 'styled-components';

export default styled.div`
  margin: 0 auto;
  ${props=>props.theme.media.greaterThan('sm')`
    padding: 0 5.5%;
  `}
  ${props => {
    if(!props.fluid) {
      return `
        max-width: 1200px;
      `;
    }
  }}

`;

