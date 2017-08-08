// import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form/immutable'
import BusinessCreation from './BusinessCreation';

const enhance = compose(
  withRouter,
  // connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'business.creation'
  })
);

export default enhance(BusinessCreation);
