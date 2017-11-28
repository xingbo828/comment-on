import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import BusinessCreation from './BusinessCreation';
import { addBusiness } from '../businessAction';
import scrollToTopOnMount from '../../Common/scrollToTopOnMount';
import validators, { validateFunc } from '../../Common/validators';

const mapDispatchToProps = dispatch => ({
  addBusiness: profile => dispatch(addBusiness(profile))
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
    form: 'business.creation',
    onSubmit: (values, dispatch, props) => {
      return props.addBusiness(values);
    },
    onSubmitSuccess: (result, dispatch, props) => {
      props.history.push({
        pathname: `/business/edit/${result}/business-pictures`
      });
    },
    validate
  }),
  scrollToTopOnMount
);

export default enhance(BusinessCreation);
