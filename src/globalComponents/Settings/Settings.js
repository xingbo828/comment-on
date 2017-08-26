import React from 'react';
import { SideBar, SideBarLink } from '../SideBar';
import { withRouter } from 'react-router-dom';
import { PanelDiv, SidebarDiv, ContainerDiv } from './Styled';
import SettingsContext from './SettingsContext';
import withSettingsContext from './withSettingsContext';

const PanelDivWithSettingsContext = withSettingsContext(PanelDiv);
const SidebarDivWithSettingsContext = withSettingsContext(SidebarDiv);

const mapLinks = (links) => {
  return links.map((link, index) => {
    const { title, path } = link;
    return <SideBarLink key={index} title={title} path={path} />
  });
};

const Settings = ({ links, children, match }) => {
  return (
    <SettingsContext>
      <ContainerDiv>
        <SidebarDivWithSettingsContext match={match.isExact}>
          <SideBar>
            { mapLinks(links) }
          </SideBar>
        </SidebarDivWithSettingsContext>
        <PanelDivWithSettingsContext match={match.isExact}>
          { children }
        </PanelDivWithSettingsContext>
      </ContainerDiv>
    </SettingsContext>
  );
};

export default withRouter(Settings);
