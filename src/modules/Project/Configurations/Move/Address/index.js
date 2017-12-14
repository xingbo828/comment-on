import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { compose, lifecycle, branch, renderNothing } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import AddressStep from './Address';
import scrollToTopOnMount from '../../../../Common/scrollToTopOnMount';
import validators, { validateFunc } from '../../../../Common/validators';
import { localSaveAddresses, loadAddresses, resetAddresses } from '../moveActions';

import { getAddresses } from '../moveReducers';

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
    form: 'project.configurations.move.address',
    validate,
    onSubmit: (values, dispatch, props) => {
      props.resetAddresses();
      return localSaveAddresses({
        addresses: values.get('addresses')
      });
    },
    onSubmitSuccess: (result, dispatch, props) => {
      if(props.location.fromOverview) {
        return props.history.push({
          pathname: '/project/configurations/move/overview'
        });
      }
      props.history.push({
        pathname: '/project/configurations/move/date',
        state: props.location.state
      });
    }
  }),
  scrollToTopOnMount
);

export default enhance(AddressStep);
