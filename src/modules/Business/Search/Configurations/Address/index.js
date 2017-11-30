import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { compose, lifecycle, branch, renderNothing, shouldUpdate } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import AddressStep from './Address';
import scrollToTopOnMount from '../../../../Common/scrollToTopOnMount';
import validators, { validateFunc } from '../../../../Common/validators';
import { localSaveAddresses, loadAddresses, resetAddresses } from '../../searchActions';

import { getAddresses } from '../../searchReducers';

const validate = validateFunc(
  [
    {
      field: 'addresses',
      validator: 'isValidAddressesInput',
      message: 'Required'
    }
  ],
  validators
);

const mapDispatchToProps = dispatch => ({
  loadAddresses: () => dispatch(loadAddresses()),
  resetAddresses:  () => dispatch(resetAddresses())
});

const mapStateToProps = state => {
  return {initialValues: getAddresses(state)}
};

const notLoaded = props => {
  return props.initialValues.get('status') !== 'LOADED'
};

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      if(this.props.initialValues.get('status')==='UNINIT'){
        this.props.loadAddresses();
      }
    }
  }),
  branch(notLoaded, renderNothing),
  reduxForm({
    form: 'search.configurations.address',
    validate,
    onSubmit: (values, dispatch, props) => {
      props.resetAddresses();
      return localSaveAddresses({
        addresses: values.get('addresses')
      });
    },
    onSubmitSuccess: (result, dispatch, props) => {
      props.history.push({
        pathname: '/business/search/configurations/date',
        state: props.location.state
      });
    }
  }),
  scrollToTopOnMount,
  shouldUpdate((props, nextProps) => {
    return false;
  })
);

export default enhance(AddressStep);
