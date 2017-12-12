import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  compose,
  lifecycle,
  branch,
  renderNothing,
  withProps
} from 'recompose';
import { reduxForm, formValues } from 'redux-form/immutable';
import DateStep from './Date';
import scrollToTopOnMount from '../../../Common/scrollToTopOnMount';
import validators, { validateFunc } from '../../../Common/validators';

import { localSaveDateTime, loadDateTime } from '../configurationActions';

import { getDateTime } from '../configurationReducers';

const validate = validateFunc(
  [
    {
      field: 'pickUpDate',
      validator: 'isRequired',
      message: 'Required'
    },
    {
      field: 'pickUpTime',
      validator: 'isRequired',
      message: 'Required'
    },
    {
      field: 'deliveryDate',
      validator: 'isRequired',
      message: 'Required'
    },
    {
      field: 'deliveryTime',
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
  branch(isLoading, renderNothing),
  reduxForm({
    form: 'mover.configurations.date',
    validate,
    onSubmit: (values, dispatch, props) => {
      return localSaveDateTime(values.toJS());
    },
    onSubmitSuccess: (result, dispatch, props) => {
      if (props.location.fromOverview) {
        return props.history.push({
          pathname: '/mover/configurations/overview'
        });
      }
      // send user to next step
      props.history.push({
        pathname: '/mover/configurations/logistics',
        state: props.location.state
      });
    }
  }),
  withProps(props => ({
    goBack: e => {
      e.preventDefault();
      props.history.push({
        pathname: '/mover/configurations/address',
        state: props.location.state
      });
    }
  })),
  formValues({
    selectedPickUpDate: 'pickUpDate',
    selectedDeliveryDate: 'deliveryDate'
  }),
  scrollToTopOnMount
);

export default enhance(DateStep);
