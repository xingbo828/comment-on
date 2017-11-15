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
      field: 'addresses',
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
        this.props.loadAddresses();
    },
    shouldComponentUpdate(nextProps) {
      return (
        this.props.initialValues.get('addresses') !== nextProps.initialValues.get('addresses')
      );
    }
  }),
  branch(notLoaded, renderComponent(Spin.FullScreenSpinner)),
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
