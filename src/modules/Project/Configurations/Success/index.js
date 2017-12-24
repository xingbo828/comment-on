import React from 'react';
import AnimatedIcon from '../../../../globalComponents/AnimatedIcon';
import Grid from '../../../../globalComponents/Grid';
import Layout from '../../../../globalComponents/Layout';
import { Paragraph, Heading } from '../../../../globalComponents/Typography';

const { Container } = Grid;
const { Checkmark } = AnimatedIcon;
const { Content: { FramedContent } } = Layout;

const ConfigurationSuccess = () => {
  return (
    <Container>
      <FramedContent
        style={{
          maxWidth: 776,
          marginTop: '4rem',
          display: 'flex',
          'alignItems': 'center',
          flexDirection: 'column'
        }}
      >
        <Checkmark style={{ width: 150, display: 'block' }} />
        <Heading wrapperTag="h1">Success</Heading>
        <Paragraph style={{maxWidth: 500}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Paragraph>
      </FramedContent>
    </Container>
  );
};

export default ConfigurationSuccess;
