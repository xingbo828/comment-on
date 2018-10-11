import React from 'react';
import AnimatedIcon from '../../../../globalComponents/AnimatedIcon';
import Grid from '../../../../globalComponents/Grid';
import Card from '../../../../globalComponents/Card';
import Box from '../../../../globalComponents/Box';
import Styled from 'styled-components';
import { withRouter } from 'react-router-dom'

import { Paragraph, Heading } from '../../../../globalComponents/Typography';
import { Button } from '../../../../globalComponents/Form';

export const Header = Styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  margin-bottom: -100px;
  background: ${props=>props.theme.colors.success};

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

const { Checkmark } = AnimatedIcon;

const ConfigurationSuccess = ({ profileData: { slug, name }, history }) => {

  const backToProfile = () => {
    history.push({
      pathname: `/profile/${slug}`
    });
  }

  return (
    <React.Fragment>
      <Header />
      <Grid.Container>
        <Grid.Row>
          <Grid.Col xs={24} sm={24} mdOffset={4} md={16} lgOffset={5} lg={14} xlOffset={6} xl={12} >
            <Box below={6}>
              <Card>
                <Box inset={6}>
                  <Box vertical={6}>
                    <Content>
                      <Box between={6}>
                        <div><Checkmark style={{ width: 125, display: 'block', margin: '0 auto' }} /></div>
                        <Box between={4}>
                          <Heading wrapperTag="h1" size="sm">
                            We've sent your request
                          </Heading>
                          <Paragraph>
                           {`${name} has been notified and will provide you a quote by email. You can expect a response within an hour of submission.`}
                          </Paragraph>
                        </Box>
                        <div><Button onClick={backToProfile} secondary>Back to profile</Button></div>
                      </Box>
                    </Content>
                  </Box>
                </Box>
              </Card>
            </Box>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </React.Fragment>
  );
};

export default withRouter(ConfigurationSuccess);
