import React from 'react';
import { Paragraph } from '../../../../../globalComponents/Typography';
import { Container } from './Styled';


const Confirmation = ({ user, receiver }) => {
  return (
    <Container>
      <Paragraph><strong>Thank you!</strong></Paragraph>
      <Paragraph>
        We have notified <strong>{receiver.provider.businessName}</strong> that you chose them to be your mover. The
        following contact information has been shared with <strong>{receiver.provider.businessName}</strong> so they can
        contact you.
      </Paragraph>
      {user.phoneNumber && <Paragraph>
        Phone Number: {user.phoneNumber}
      </Paragraph>}
      {user.email && <Paragraph>
        Email: {user.email}
      </Paragraph>}
      <Paragraph>
        Sit tight!
      </Paragraph>
    </Container>
  );
};

export default Confirmation;
