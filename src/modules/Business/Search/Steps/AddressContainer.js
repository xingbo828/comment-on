import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderNothing } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import AddressStep from './Address';
import scrollToTopOnMount from '../../../Common/scrollToTopOnMount';

import validators, { validateFunc } from '../../../Common/validators';

import {
  localSaveAddresses,
  loadAddresses
} from '../searchActions';

import {
  getAddresses
} from '../searchReducers';


const validate = validateFunc([{
  field: 'homeAddress',
  validator: 'isRequired',
  message: 'Required'
}, {
  field: 'destAddress',
  validator: 'isRequired',
  message: 'Required'
}] , validators);


const mapDispatchToProps = dispatch => ({
  loadAddresses: () => dispatch(loadAddresses())
});

const mapStateToProps = state => ({
  initialValues: getAddresses(state)
});

const isLoading = (props) => props.initialValues.get('status') !== 'LOADED';

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.loadAddresses();
    },
    shouldComponentUpdate(nextProps) {
      const diffHomeAddr = this.props.initialValues.get('homeAddress') !== nextProps.initialValues.get('homeAddress');
      const diffDestAddr = this.props.initialValues.get('destAddress') !== nextProps.initialValues.get('destAddress');
      return diffHomeAddr || diffDestAddr;
    }
  }),
  branch(
    isLoading,
    renderNothing
  ),
  reduxForm({
    form: 'search.steps.address',
    validate,
    onSubmit: (values, dispatch, props) => {
      return localSaveAddresses(values.toJS())(dispatch);
    },
    onSubmitSuccess: (result, dispatch, props) => {
      props.history.push({
        pathname: '/business/search/steps/items'
      });
    }
  }),
  scrollToTopOnMount
);

export default enhance(AddressStep);
