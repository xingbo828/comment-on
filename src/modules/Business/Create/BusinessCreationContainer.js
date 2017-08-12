// import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form/immutable'
import BusinessCreation from './BusinessCreation';
import { addBusiness } from '../businessAction';

import { isRequired, isValidPhoneNumber, isValidBusinessHours } from '../../Common/validators';

const mapDispatchToProps = dispatch => ({
  addBusiness: (profile) => dispatch(addBusiness(profile))
});

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
  connect(null, mapDispatchToProps),
  reduxForm({
    form: 'business.creation',
    onSubmit: (values, dispatch, props) => { return props.addBusiness(values); },
    validate
  })
);

export default enhance(BusinessCreation);
