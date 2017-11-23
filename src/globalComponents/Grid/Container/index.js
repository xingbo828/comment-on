import styled from 'styled-components';

export default styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-right: 15px;
  padding-left: 15px;
  ${props => {
    if(!props.fluid) {
      return `
        max-width: 1200px;
      `;
    }
  }}

`;

