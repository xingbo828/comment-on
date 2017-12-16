import React from 'react';
import { Field } from 'redux-form/immutable';
import { Button, TextArea } from '../../../globalComponents/Form';
import Icon from '../../../globalComponents/Icon';
import Grid from '../../../globalComponents/Grid';
import { FormContainer } from './Styled';

const { Container, Row, Col } = Grid;
const renderTextArea = ({ input, ...rest }) => {
  return <TextArea input={input} resizable={false} {...rest} />;
};
const ConversationForm = ({ handleSubmit, pristine, valid, submitting }) => {
  return (
    <FormContainer onSubmit={handleSubmit}>
      <Container>
        <Row>
          <Col xs={16} sm={16} md={16} lg={16}>
            <Field name="message" component={renderTextArea} />
          </Col>
          <Col xs={8} sm={8} md={8} lg={8}>
            <Button
              type="submit"
              small
              primary
              disabled={submitting || pristine || !valid}
            >
              Send <Icon icon="commenting" />
            </Button>
          </Col>
        </Row>
      </Container>
    </FormContainer>
  );
};

export default ConversationForm;
