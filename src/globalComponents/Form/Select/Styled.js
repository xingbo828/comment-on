import styled from 'styled-components';

export const Select = styled.select`
  display: block;
  padding: ${props=>props.theme.spaces.base} ${props=>props.theme.spaces.wide};
  ${props=>{
    if(props.size === 'sm'){
      return `height: calc(${props.theme.spaces.base} * 1.5 + 2px);`;
    }
    return `height: calc(${props.theme.spaces.wide} + 2px);`;
  }}
  border: 1px solid #ccc;
  font-size: 1rem;
  background-color: white;
  width: 100%;
`;

