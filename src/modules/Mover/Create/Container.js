import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import Create from './Create';
import { addMover } from '../moverAction';
import scrollToTopOnMount from '../../Common/scrollToTopOnMount';
import validators, { validateFunc } from '../../Common/validators';

const mapDispatchToProps = dispatch => ({
  addMover: profile => dispatch(addMover(profile))
});

const validate = validateFunc(
  [
    {
      field: 'businessName',
      validator: 'isRequired',
      message: 'Required'
    },
    {
      field: 'businessAddrCity',
      validator: 'isRequired',
      message: 'Required'
    },
    {
      field: 'businessAddrProv',
      validator: 'isRequired',
      message: 'Required'
    },
    {
      field: 'businessAddrPostalCode',
      validator: 'isRequired',
      message: 'Required'
    },
    {
      field: 'businessPhoneNumber',
      validator: 'isValidPhoneNumber',
      message: 'Invalid phone number'
    },
    {
      field: 'businessHour',
      validator: 'isValidBusinessHours',
      message: 'Invalid business hours'
    },
    {
      field: 'businessEmail',
      validator: 'isValidEmail',
      message: 'Invalid business email'
    }
  ],
  validators
);

const enhance = compose(
  withRouter,
  connect(null, mapDispatchToProps),
  reduxForm({
    form: 'mover.create',
    onSubmit: (values, dispatch, props) => {
      return props.addMover(values);
    },
    onSubmitSuccess: (result, dispatch, props) => {
      props.history.push({
        pathname: `/mover/edit/${result}/pictures`
      });
    },
    validate
  }),
  scrollToTopOnMount
);

export default enhance(Create);
