import React from 'react';
import { Paragraph } from '../../../../../globalComponents/Typography';
import { Container, MoverProfileLink } from './Styled';

const Confirmation = ({ user, receiver }) => {
  return (
    <Container>
      <Paragraph>
        <strong>Thank you!</strong>
      </Paragraph>
      <Paragraph>
        We have notified{' '}
        <MoverProfileLink to={`/mover/profile/${receiver.provider.id}`}>
          {receiver.provider.businessName}
        </MoverProfileLink>{' '}
        that you chose them to be your mover. The following contact information
        has been shared with{' '}
        <MoverProfileLink to={`/mover/profile/${receiver.provider.id}`}>
          {receiver.provider.businessName}
        </MoverProfileLink>{' '}
        so they can contact you.
      </Paragraph>
      {user.phoneNumber && (
        <Paragraph>Phone Number: {user.phoneNumber}</Paragraph>
      )}
      {user.email && <Paragraph>Email: {user.email}</Paragraph>}
      <Paragraph>Sit tight!</Paragraph>
    </Container>
  );
};

export default Confirmation;
