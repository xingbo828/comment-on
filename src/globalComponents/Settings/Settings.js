import React from 'react';
import { SideBar, SideBarLink } from '../SideBar';
import { Switch, NavLink, withRouter } from 'react-router-dom';
import { PanelDiv, SidebarDiv, ContainerDiv } from './Styled';

const mapLinks = (links) => {
  return links.map((link) => {
    const { title, path } = link;
    return <SideBarLink title={title} path={path} />
  });
};

const Settings = ({ links, children, match }) => {
  return (
    <ContainerDiv>
      <SidebarDiv match={match.isExact}>
        <SideBar>
          { mapLinks(links) }
        </SideBar>
      </SidebarDiv>
      <PanelDiv match={match.isExact}> 
        { children }
      </PanelDiv>
    </ContainerDiv>
  );
};

export default withRouter(Settings);