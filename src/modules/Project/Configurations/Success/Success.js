import React from 'react';
import AnimatedIcon from '../../../../globalComponents/AnimatedIcon';
import Grid from '../../../../globalComponents/Grid';
import Layout from '../../../../globalComponents/Layout';
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
const { Content: { FramedContent } } = Layout;

const ConfigurationSuccess = ({goToProjectManagement}) => {
  return (
    <Container>
      <FramedContent>
        <SuccessContainer>
          <Checkmark style={{ width: 150, display: 'block' }} />
          <Heading wrapperTag="h1">Thank You</Heading>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Paragraph>
        </SuccessContainer>
        <ActionContainer>
          <Button onClick={goToProjectManagement}>Check out progress</Button>
        </ActionContainer>
      </FramedContent>
    </Container>
  );
};

export default ConfigurationSuccess;
