import React from 'react';
import AnimatedIcon from '../../../../globalComponents/AnimatedIcon';
import Grid from '../../../../globalComponents/Grid';
import {
  Button
} from '../../../../globalComponents/Form';
import { Paragraph, Heading } from '../../../../globalComponents/Typography';
import {
  SuccessContainer,
  ActionContainer
} from './Styled';

const { Container } = Grid;
const { Checkmark } = AnimatedIcon;

const ConfigurationSuccess = ({goToProjectManagement}) => {
  return (
    <Container>
      <SuccessContainer>
        <Checkmark style={{ width: 150, display: 'block' }} />
        <Heading wrapperTag="h1">Looks good! Now let's find you a mover.</Heading>
        <Paragraph>
          We've provided your move details to several potential movers and will soon provide you with several 
          moving options to choose from. Check your Move's status page to see the progress. 
        </Paragraph>
      </SuccessContainer>
      <ActionContainer>
        <Button onClick={goToProjectManagement}>Check out progress</Button>
      </ActionContainer>
    </Container>
  );
};

export default ConfigurationSuccess;
