import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import ItemsStep from './Items';
import message from '../../../../globalComponents/Message';
import scrollToTopOnMount from '../../../Common/scrollToTopOnMount';


const enhance = compose(
  withRouter,
  reduxForm({
    form: 'search.steps.items',
    onSubmit: (values, dispatch, props) => {
      // handle submit
    },
    onSubmitSuccess: (result, dispatch, props) => {
      // send user to next step
      message.success('Items info collected');
      props.history.push({
        pathname: '/business/search/steps/date'
      });
    }
  }),
  scrollToTopOnMount
);

export default enhance(ItemsStep);
