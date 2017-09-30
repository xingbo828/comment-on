import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import LogisticsStep from './Logistics';
import message from '../../../../globalComponents/Message';
import scrollToTopOnMount from '../../../Common/scrollToTopOnMount';


const enhance = compose(
  withRouter,
  reduxForm({
    form: 'search.steps.logistics',
    onSubmit: (values, dispatch, props) => {
      // handle submit
    },
    onSubmitSuccess: (result, dispatch, props) => {
      // send user to next step
      message.loading('Looking for movers...');
    }
  }),
  scrollToTopOnMount
);

export default enhance(LogisticsStep);
