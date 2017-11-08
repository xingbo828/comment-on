import styled from 'styled-components';

export default styled.div`
  margin: 0 auto;
  ${props => {
    if(!props.fluid) {
      return `
        max-width: 1200px;
        padding: 0 5.5%;
      `;
    }
  }}

`;

