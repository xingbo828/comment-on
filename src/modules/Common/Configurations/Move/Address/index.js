import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, setStatic, lifecycle, branch, withProps, renderNothing } from 'recompose';
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
  return { addresses: getAddresses(state) }
};

const notLoaded = props => {
  const isNotLoaded = isUndefined(props.addresses) || props.addresses.get('status') !== 'LOADED'
  return isNotLoaded
};

const enhance = compose(
  setStatic('label', 'Moving addresses'),
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      const shouldFetch = isUndefined(this.props.addresses) || this.props.addresses.get('status') === 'UNINIT';
      if(shouldFetch){
        this.props.loadAddresses();
      }
    }
  }),
  branch(notLoaded, renderNothing),
  withProps(props => ({
    initialValues: { addresses: props.addresses.get('detail') },
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
      return localSaveAddresses(values.toJS());
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
