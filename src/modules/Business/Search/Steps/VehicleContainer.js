import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderComponent } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import Vehicle from './Vehicle';
import scrollToTopOnMount from '../../../Common/scrollToTopOnMount';
import validators, { validateFunc } from '../../../Common/validators';
import { loadVehicle, localSaveVehicle } from '../searchActions';
import { getVehicle } from '../searchReducers';
import Spin from '../../../../globalComponents/Spin';

const validate = validateFunc([{
  field: 'vehicle',
  validator: 'isRequired',
  message: 'Required'
}] , validators);


const mapDispatchToProps = dispatch => ({
  loadVehicle: () => dispatch(loadVehicle())
});

const mapStateToProps = state => ({
  initialValues: getVehicle(state)
});


const isLoading = (props) => props.initialValues.get('status') !== 'LOADED';

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.loadVehicle();
    },
    shouldComponentUpdate(nextProps) {
      return (
        this.props.initialValues.get('vehicle') !== nextProps.initialValues.get('vehicle') ||
        this.props.initialValues.get('vehicle') === null
      );
    }
  }),
  branch(
    isLoading,
    renderComponent(Spin.FullScreenSpinner)
  ),
  reduxForm({
    form: 'search.steps.vehicle',
    validate,
    onSubmit: (values, dispatch, props) => {
      return localSaveVehicle(values.toJS());
    },
    onSubmitSuccess: (result, dispatch, props) => {
      // send user to next step
      props.history.push({
        pathname: '/business/search/steps/date',
        state: props.location.state
      });
    }
  }),
  scrollToTopOnMount
);

export default enhance(Vehicle);
