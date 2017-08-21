import Styled from 'styled-components';
import {
  media,
  borderPrimary,
  gutterWidth
} from '../../foundation/Variables';

const ContainerDiv = Styled.div`
  display: flex;

  ${media.fromMedium`
    padding: 0 ${gutterWidth};
    margin: 0 auto;
    max-width: 1200px;
  `}
`;

const PanelDiv = Styled.div`
  border-radius: 3px;
  background: white;
  display: block;
  padding: 2rem;
  flex: 3;
  display: ${props => props.match ? 'none' : 'block'};

  ${media.fromMedium`
    display: block;
    border: 1px solid ${borderPrimary};
  `}
`;

const SidebarDiv = Styled.div`
  background: white;
  margin: 0;
  display: block;
  flex: 1;
  display: ${props => props.match ? 'block' : 'none'};

  ${media.fromMedium`
    margin: 0 2rem 0 0;
    display: block;
  `}
`;

export {
  ContainerDiv,
  PanelDiv,
  SidebarDiv
};

