import Styled from 'styled-components';


const PanelDiv = Styled.div`
  border-radius: 3px;
  background: white;
  padding: 2rem;

  ${props=>props.theme.media.greaterThan('md') `
    border: 1px solid ${props => props.theme.colors.borderPrimary};
  `}
`;

const SidebarDiv = Styled.div`
  background: white;
  margin: 0;
  display: block;
`;

export {
  PanelDiv,
  SidebarDiv
};

