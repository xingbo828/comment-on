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
import scrollToTopOnMount from '../../../../Common/scrollToTopOnMount';
import validators, { validateFunc } from '../../../../Common/validators';

import { localSaveDate, loadDate } from '../moveActions';

import { getDate } from '../moveReducers';

const validate = validateFunc(
  [
    {
      field: 'pickUpDate',
      validator: 'isRequired',
      message: 'Required'
    }
  ],
  validators
);

const mapDispatchToProps = dispatch => ({
  loadDate: () => dispatch(loadDate())
});

const mapStateToProps = state => ({ initialValues: getDate(state) });

const isLoading = props => props.initialValues.get('status') !== 'LOADED';

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.loadDate();
    }
  }),
  branch(isLoading, renderNothing),
  reduxForm({
    form: 'project.configurations.move.date',
    validate,
    onSubmit: (values, dispatch, props) => {
      return localSaveDate(values.toJS());
    },
    onSubmitSuccess: (result, dispatch, props) => {
      if (props.location.fromOverview) {
        return props.history.push({
          pathname: '/projects/configurations/move/overview'
        });
      }
      // send user to next step
      props.history.push({
        pathname: '/projects/configurations/move/logistics',
        state: props.location.state
      });
    }
  }),
  withProps(props => ({
    goBack: e => {
      e.preventDefault();
      props.history.push({
        pathname: '/projects/configurations/move/address',
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
