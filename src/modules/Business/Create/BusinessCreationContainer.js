// import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form/immutable'
import BusinessCreation from './BusinessCreation';
import { isRequired, isValidPhoneNumber, isValidBusinessHours } from '../../Common/validators';

const validate = values => {
  const errors = {};
  if (!isRequired(values.get('businessName'))) {
    errors.businessName = 'Required';
  }
  if (!isValidPhoneNumber(values.get('businessPhoneNumber'))) {
     errors.businessPhoneNumber = 'Invalid phone number';
  }
  if (!isValidBusinessHours(values.get('businessHour'))) {
    errors.businessHour = 'Invalid business hours';
  }
  return errors;
}

const enhance = compose(
  withRouter,
  // connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'business.creation',
    validate
  })
);

export default enhance(BusinessCreation);
