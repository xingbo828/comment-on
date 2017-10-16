import React from 'react';
import Grid from '../../../globalComponents/Grid';
import SecondaryNav from '../../../globalComponents/SecondaryNav';
import { Heading, Paragraph } from '../../../globalComponents/Typography';
import Estimate from './Estimate';
import Card from '../../../globalComponents/Card';
import {
  DescriptionList,
  Row
} from '../../../globalComponents/DescriptionList';
import {
  Button
} from '../../../globalComponents/Form';
import {
  HeroDiv,
  ProfileContentContainer,
  Content,
  Aside,
  CtaContainer
} from './Styled';

const { Container } = Grid;

const BusinessProfile = () => (
  <div>
    <HeroDiv />
    <SecondaryNav />
    <Container>
      <ProfileContentContainer>
        <Content>
          <Heading wrapperTag="h3">Something Something Company Name</Heading>
          <Paragraph>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</Paragraph>
          <Heading wrapperTag="h3" underline>Vehicles</Heading>
          <Paragraph>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecatParagraph cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</Paragraph>
          <Heading wrapperTag="h3" underline>Reviews</Heading>
          <Paragraph>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</Paragraph>
          <Heading wrapperTag="h3" underline>Crew</Heading>
          <Paragraph>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</Paragraph>
        </Content>
        <Aside>
          <Card>
            <Estimate />
            <DescriptionList>
              <Row term="Key" definition="Value" />
              <Row term="Key" definition="Value" />
              <Row term="Key" definition="Value" />
            </DescriptionList>
            <CtaContainer>
              <Button primary icon="arrow-right">Request Move</Button>
            </CtaContainer>
          </Card>
        </Aside>
      </ProfileContentContainer>
    </Container>
  </div>
);


export default BusinessProfile;
