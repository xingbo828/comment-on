import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import AddressStep from './Address';
import message from '../../../../globalComponents/Message';
import scrollToTopOnMount from '../../../Common/scrollToTopOnMount';

const enhance = compose(
  withRouter,
  reduxForm({
    form: 'search.steps.address',
    onSubmit: (values, dispatch, props) => {
      // handle submit before send to next step

    },
    onSubmitSuccess: (result, dispatch, props) => {
      // send user to next step
      message.success('Address info collected');
      props.history.push({
        pathname: '/business/search/steps/items'
      });
    }
  }),
  lifecycle({
    shouldComponentUpdate(nextProps) {
      return false;
    }
  }),
  scrollToTopOnMount
);

export default enhance(AddressStep);
