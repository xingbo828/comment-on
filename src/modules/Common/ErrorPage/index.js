import React from 'react';
import Grid from '../../../globalComponents/Grid';
import Card from '../../../globalComponents/Card';
import Box from '../../../globalComponents/Box';
import Styled from 'styled-components';

import { Paragraph, Heading } from '../../../globalComponents/Typography';

export const Header = Styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  margin-bottom: -100px;
  background: ${props=>props.theme.colors.primary};

  ${props=>props.theme.media.greaterThan('md')`
    height: 300px;
    margin-bottom: -175px;
  `}

  * {
    z-index: 1;
  }

  &:after {
    content: '';
    position: absolute;
    width: 120%;
    padding-bottom: 50%;
    background: white;
    border-top-right-radius: 99rem;
    border-top-left-radius: 99rem;
    left: calc(-10%);
    transform-origin: 50% 100%;
    transform: scaleY(.1);
    bottom:0;
    z-index: 0;
  }
`

export const Content = Styled.div`
  text-align: center;
`

const ConfigurationSuccess = () => {
  return (
    <React.Fragment>
      <Header />
      <Grid.Container>
        <Grid.Row>
          <Grid.Col xs={24} sm={24} mdOffset={4} md={16} lgOffset={5} lg={14} xlOffset={6} xl={12} >
            <Card>
              <Box inset={6}>
                <Box vertical={6}>
                  <Content>
                    <Box between={6}>
                      <Box between={4}>
                        <Heading wrapperTag="h1" size="sm">
                          Oops. Something went wrong.
                        </Heading>
                        <Paragraph>
                          This page does not exist or may be temporaily unavailable. Check you have the correct address or try again later. 
                        </Paragraph>
                      </Box>
                    </Box>
                  </Content>
                </Box>
              </Box>
            </Card>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </React.Fragment>
  );
};

export default ConfigurationSuccess;
