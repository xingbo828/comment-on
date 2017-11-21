import React from 'react';
import { Field } from 'redux-form/immutable';
import { Button, Radio } from '../../../../../globalComponents/Form';
import Grid from '../../../../../globalComponents/Grid';
import Layout from '../../../../../globalComponents/Layout';
import { Heading, Paragraph } from '../../../../../globalComponents/Typography';
import { HeadingInfo, HeadingParagraph } from '../Shared/Styled';

const { Form, FormActions, FormInner } = Layout.Form;


const Items = ({ handleSubmit, pristine, reset, valid, submitting }) => {
  return (
    <Grid.Container>
      <HeadingInfo>
        <Heading wrapperTag="h1">Items</Heading>
        <HeadingParagraph>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </HeadingParagraph>
      </HeadingInfo>
      <Form onSubmit={handleSubmit}>
        <FormInner>

        </FormInner>
        <FormActions>
          <Button
            style={{ float: 'right' }}
            type="submit"
            primary
            icon="arrow-right"
            disabled={submitting || !valid}
          >
            Next
          </Button>
        </FormActions>
      </Form>
    </Grid.Container>
  );
};

Items.propTypes = {};

export default Items;
