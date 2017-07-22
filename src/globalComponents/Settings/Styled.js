import Styled from 'styled-components';
import { 
  media,
  borderPrimary,
  textDark,
  offWhite
} from '../../foundation/Variables';

const ContainerDiv = Styled.div`
  display: flex;
`;

const PanelDiv = Styled.div`
  border: 1px solid ${borderPrimary};
  border-radius: 3px;
  display: block;
  padding: 1rem;
  flex: 3;

  ${media.small`
    display: ${props => props.match ? 'none' : 'block'};
  `}
`;

const SidebarDiv = Styled.div`
  margin: 0 2rem 0 0;
  display: block;
  flex: 1;

  ${media.small`
    margin: 0;
    display: ${props => props.match ? 'block' : 'none'};
  `}
`;

export {
  ContainerDiv,
  PanelDiv,
  SidebarDiv
};

