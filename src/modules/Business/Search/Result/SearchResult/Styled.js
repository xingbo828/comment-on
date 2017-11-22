import styled from 'styled-components';
import Grid from '../../../../../globalComponents/Grid';

export const LogoContainer = styled.img`
  width: 100%;
`;

export const ItemRow = Grid.Row.extend`
  &:hover {
    background: ${props => props.theme.colors.offWhite};
  }
  padding: ${props => props.theme.spaces.base} 0;
  border-bottom: 1px dashed ${props => props.theme.colors.border};
  cursor: pointer;
`;

export const HeaderRow = Grid.Row.extend`
  border-bottom: 15px solid;
  border-image: linear-gradient(${props => props.theme.colors.textLight}, transparent) 5;
  color: ${props => props.theme.colors.textLight};
  padding: 0 0 ${props => props.theme.spaces.base};
`;
