import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderComponent } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import AddressStep from './Address';
import scrollToTopOnMount from '../../../Common/scrollToTopOnMount';
import Spin from '../../../../globalComponents/Spin';
import validators, { validateFunc } from '../../../Common/validators';

import { localSaveAddresses, loadAddresses } from '../searchActions';

import { getAddresses } from '../searchReducers';

const validate = validateFunc(
  [
    {
      field: 'homeAddress',
      validator: 'isRequired',
      message: 'Required'
    },
    {
      field: 'destAddress',
      validator: 'isRequired',
      message: 'Required'
    }
  ],
  validators
);

const mapDispatchToProps = dispatch => ({
  loadAddresses: () => dispatch(loadAddresses())
});

const mapStateToProps = state => ({
  initialValues: getAddresses(state)
});

const notLoaded = props => props.initialValues.get('status') !== 'LOADED';

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      if (notLoaded(this.props)) {
        this.props.loadAddresses();
      }
    }
  }),
  branch(notLoaded, renderComponent(Spin.FullScreenSpinner)),
  lifecycle({
    shouldComponentUpdate(nextProps) {
      const diffHomeAddr =
        this.props.initialValues.get('homeAddress') !==
        nextProps.initialValues.get('homeAddress');
      const diffDestAddr =
        this.props.initialValues.get('destAddress') !==
        nextProps.initialValues.get('destAddress');
      const diffStatus =
        this.props.initialValues.get('status') !==
        nextProps.initialValues.get('status');
      return diffHomeAddr || diffDestAddr;
    }
  }),
  reduxForm({
    form: 'search.steps.address',
    validate,
    onSubmit: (values, dispatch, props) => {
      return localSaveAddresses(values.toJS());
    },
    onSubmitSuccess: (result, dispatch, props) => {
      props.history.push({
        pathname: '/business/search/steps/vehicle',
        state: props.location.state
      });
    }
  }),
  scrollToTopOnMount
);

export default enhance(AddressStep);
