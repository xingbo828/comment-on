import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderComponent } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import DateStep from './Date';
import scrollToTopOnMount from '../../../Common/scrollToTopOnMount';
import validators, { validateFunc } from '../../../Common/validators';
import Spin from '../../../../globalComponents/Spin';

import { localSaveDateTime, loadDateTime } from '../searchActions';

import { getDateTime } from '../searchReducers';

const validate = validateFunc(
  [
    {
      field: 'date',
      validator: 'isRequired',
      message: 'Required'
    },
    {
      field: 'time',
      validator: 'isRequired',
      message: 'Required'
    }
  ],
  validators
);

const mapDispatchToProps = dispatch => ({
  loadDateTime: () => dispatch(loadDateTime())
});

const mapStateToProps = state => ({ initialValues: getDateTime(state) });

const isLoading = props => props.initialValues.get('status') !== 'LOADED';

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.loadDateTime();
    }
  }),
  branch(isLoading, renderComponent(Spin.FullScreenSpinner)),
  reduxForm({
    form: 'search.steps.date',
    validate,
    onSubmit: (values, dispatch, props) => {
      return localSaveDateTime(values.toJS());
    },
    onSubmitSuccess: (result, dispatch, props) => {
      // send user to next step
      props.history.push({
        pathname: '/business/search/steps/logistics'
      });
    }
  }),
  scrollToTopOnMount
);

export default enhance(DateStep);
