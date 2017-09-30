import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import DateStep from './Date';
import message from '../../../../globalComponents/Message';
import scrollToTopOnMount from '../../../Common/scrollToTopOnMount';


const enhance = compose(
  withRouter,
  reduxForm({
    form: 'search.steps.date',
    onSubmit: (values, dispatch, props) => {
      // handle submit
    },
    onSubmitSuccess: (result, dispatch, props) => {
      // send user to next step
      message.success('Date info collected');
      props.history.push({
        pathname: '/business/search/steps/logistics'
      });
    }
  }),
  scrollToTopOnMount
);

export default enhance(DateStep);
