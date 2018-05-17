import React from 'react';
import AnimatedIcon from '../../../../globalComponents/AnimatedIcon';
import Grid from '../../../../globalComponents/Grid';
import {
  Button
} from '../../../../globalComponents/Form';
import { Paragraph, Heading } from '../../../../globalComponents/Typography';
import {
  SuccessContainer,
  Content
} from './Styled';

const { Container, Row, Col } = Grid;
const { Checkmark } = AnimatedIcon;

const ConfigurationSuccess = ({goToProjectManagement}) => {
  return (
    <Container>
      <Row>
        <Col
          lg="12"
          lgOffset="6"
          md="12"
          mdOffset="6"
          sm="24"
          xs="24"
        >
          <SuccessContainer>
            <Checkmark style={{ width: 150, display: 'block' }} />
            <Content>
              <Heading wrapperTag="h1" size="sm">Looks good! Now let's find you a mover.</Heading>
              <Paragraph>
                We've provided your move details to several potential movers and will soon provide you with several 
                moving options to choose from. Check your Move's status page to see the progress. 
              </Paragraph>
            </Content>
            <Button onClick={goToProjectManagement}>Check out progress</Button>
          </SuccessContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default ConfigurationSuccess;
