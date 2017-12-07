import styled from 'styled-components';
import Grid from '../../../../../globalComponents/Grid';

const { Col } = Grid;

export const StyledCol = Col.extend`
  justify-content: center;
  display: flex;
  padding-top: ${props=>props.theme.spaces.base};
`;


export const CrewMemberContainer = styled.div`
  padding: ${props=>props.theme.spaces.base} 0;
`;
