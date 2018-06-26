import React from 'react';
import AnimatedIcon from '../../../globalComponents/AnimatedIcon';
import Grid from '../../../globalComponents/Grid';
import styled from 'styled-components';

import { Paragraph, Heading } from '../../../globalComponents/Typography';

const SuccessContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 3rem 0;

  ${props => props.theme.media.greaterThan('md')`
    padding: 4rem 0;
  `};
`;

const Content = styled.div`
  margin: 2rem 0;
`;

const { Container, Row, Col } = Grid;
const { Checkmark } = AnimatedIcon;

const ConfigurationSuccess = () => {
  return (
    <Container>
      <Row>
        <Col lg="12" lgOffset="6" md="12" mdOffset="6" sm="24" xs="24">
          <SuccessContainer>
            <Checkmark style={{ width: 150, display: 'block' }} />
            <Content>
              <Heading wrapperTag="h1" size="sm">
                Looks good! Your request has been sent.
              </Heading>
              <Paragraph>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters.
              </Paragraph>
            </Content>
          </SuccessContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default ConfigurationSuccess;
