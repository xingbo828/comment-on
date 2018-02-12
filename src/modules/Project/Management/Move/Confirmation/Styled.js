import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MoverProfileLink = styled(Link)`
  color: ${props=>props.theme.colors.secondary};
  ${'' /* text-decoration: none; */}
  font-size: .875rem;
  font-weight: ${props=>props.theme.fontWeights.roman};
`;
