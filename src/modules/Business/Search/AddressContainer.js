import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import AddressStep from './Address';

const enhance = compose(
  withRouter,
  reduxForm({
    form: 'search.steps.address',
    onSubmit: (values, dispatch, props) => {
      // handle submit before send to next step

    },
    onSubmitSuccess: (result, dispatch, props) => {
      // send user to next step
      props.history.push({
        pathname: '/business/search/steps/items'
      });
    }
  })
);

export default enhance(AddressStep);
