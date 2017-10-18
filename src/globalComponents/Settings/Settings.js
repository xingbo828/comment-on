import React from 'react';
import { SideBar, SideBarLink } from '../SideBar';
import { withRouter } from 'react-router-dom';
import { PanelDiv, SidebarDiv } from './Styled';
import SettingsContext from './SettingsContext';
import withSettingsContext from './withSettingsContext';
import Grid from '../../globalComponents/Grid';

const { Container, Row, Col } = Grid;
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
      <Container fluid>
      <Row>
        <Col md={8} lg={8}>
          <SidebarDivWithSettingsContext match={match.isExact}>
            <SideBar>
              { mapLinks(links) }
            </SideBar>
          </SidebarDivWithSettingsContext>
        </Col>
        <Col md={16} lg={16}>
          <PanelDivWithSettingsContext match={match.isExact}>
            { children }
          </PanelDivWithSettingsContext>
        </Col>
      </Row>
      </Container>
    </SettingsContext>
  );
};

export default withRouter(Settings);
