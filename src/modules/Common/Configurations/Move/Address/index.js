import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, lifecycle, branch, withProps, renderNothing } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import AddressStep from './Address';
import scrollToTopOnMount from '../../../../Common/scrollToTopOnMount';
import validators, { validateFunc } from '../../../../Common/validators';
import { localSaveAddresses, loadAddresses, resetAddresses } from './actions';

import { getAddresses } from '../moveReducers';
import isUndefined from 'lodash/isUndefined';

const validate = validateFunc(
  [
    {
      field: 'detail',
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
  const isNotLoaded = isUndefined(props.initialValues) || props.initialValues.get('status') !== 'LOADED'
  return isNotLoaded
};

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      const shouldFetch = isUndefined(this.props.initialValues) || this.props.initialValues.get('status') === 'UNINIT';
      if(shouldFetch){
        this.props.loadAddresses();
      }
    }
  }),
  branch(notLoaded, renderNothing),
  withProps(props => ({
    goBack: e => {
      e.preventDefault();
      props.history.push({
        pathname: props.previous,
        state: props.location.state
      });
    }
  })),
  reduxForm({
    form: 'configurations.move.address',
    validate,
    onSubmit: (values, dispatch, props) => {
      props.resetAddresses();
      return localSaveAddresses({
        addresses: values.get('detail')
      });
    },
    onSubmitSuccess: (result, dispatch, props) => {
      if(props.location.fromOverview) {
        return props.history.push({
          pathname: props.postEdit
        });
      }
      props.history.push({
        pathname: props.next,
        state: props.location.state
      });
    }
  }),
  scrollToTopOnMount
);

export default enhance(AddressStep);
