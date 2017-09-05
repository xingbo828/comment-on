import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderNothing } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import Vehicles from './Vehicles';

const enhance = compose(
  withRouter,
  reduxForm({
    form: 'business.edit.vehicles',
    onSubmit: (values, dispatch, props) => {
      // return updateBusiness(values, props.match.params.businessId);
    }
  })
);

export default enhance(Vehicles);
