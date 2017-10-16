import Styled from 'styled-components';
import media from '../../foundation/mediaQueries';

const ContainerDiv = Styled.div`
  display: flex;

  ${media.greaterThan('md') `
    padding: 0 ${props => props.theme.layout.gutterWidth};
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
  display: ${props => props.formMode ? 'block' : 'none'};

  ${media.greaterThan('md') `
    display: block;
    border: 1px solid ${props => props.theme.colors.borderPrimary};
  `}
`;

const SidebarDiv = Styled.div`
  background: white;
  margin: 0;
  display: block;
  flex: 1;
  display: ${props => props.formMode ? 'none' : 'block'};

  ${media.greaterThan('md') `
    margin: 0 2rem 0 0;
    display: block;
  `}
`;

export {
  ContainerDiv,
  PanelDiv,
  SidebarDiv
};

