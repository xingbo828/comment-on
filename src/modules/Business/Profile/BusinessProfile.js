import React from 'react';
import { GridContainer } from '../../../globalComponents/Grid';
import SecondaryNav from '../../../globalComponents/SecondaryNav';
import Heading from '../../../globalComponents/Typography/Heading';
import Estimate from './Estimate';
import { 
  HeroDiv,
  ProfileContentContainer,
  Content,
  Aside
} from './Styled';

const BusinessProfile = () => (
  <div>
    <HeroDiv />
    <SecondaryNav />
    <GridContainer>
      <ProfileContentContainer>
        <Content>
          <Heading wrapperTag="h3">Something Something Company Name</Heading>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
          <Heading wrapperTag="h3" underline>Vehicles</Heading>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
          <Heading wrapperTag="h3" underline>Reviews</Heading>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
          <Heading wrapperTag="h3" underline>Crew</Heading>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
        </Content>
        <Aside>
         <Estimate />
        </Aside>
      </ProfileContentContainer>
    </GridContainer>
  </div>
);


export default BusinessProfile;