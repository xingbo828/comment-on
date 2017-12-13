import styled from 'styled-components';
import { Paragraph } from '../../../../../../globalComponents/Typography';

export const StyledContainer = styled.div`
  padding: ${props=>props.theme.spaces.tight};
  margin-bottom: ${props=>props.theme.spaces.tight};
`;

export const Label = styled.label`
  font-size: 1.5rem;
  display: inline-block;
  font-weight: ${props=>props.theme.fontWeights.medium};
`;


export const Desc = Paragraph.extend`
  color:${props=>props.theme.colors.textLight};
  line-height: 1;
  font-size: .875rem;
`;


export const StyledItems = styled.ul`
  padding: 0;
  margin: ${props=>props.theme.spaces.base} 0 0;
`;

export const StyledItem = styled.li`
  list-style: none;
  padding: ${props=>props.theme.spaces.xTight} 0;
`;
