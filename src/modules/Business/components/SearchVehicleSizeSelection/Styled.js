import styled from 'styled-components';
import {Radio} from '../../../../globalComponents/Form';

export const Container = styled.label`
  cursor: pointer;
  flex: 1;
  padding: 1rem;
  border-radius: 3px;
  border: 1px solid;
  border-color: ${props=>props.theme.colors.textLight};
  text-align: center;
  ${props=>{
    if(props.checked) {
      return `
        border-color: ${props.theme.colors.primary};
      `;
    }
  }}
`;

export const ParagraphWrapper = styled.div`
  font-weight: ${props=>props.theme.fontWeights.medium};
  ${props=>{
    if(props.checked) {
      return `
        color: ${props.theme.colors.primary};
      `;
    }
  }}
`;

