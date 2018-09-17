import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  compose,
  lifecycle,
  branch,
  renderNothing,
  withProps,
  setStatic
} from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import ContactInfo from './ContactInfo';
import scrollToTopOnMount from '../../../../Common/scrollToTopOnMount';
import validators, { validateFunc } from '../../../../Common/validators';
import isUndefined from 'lodash/isUndefined';
import { localSaveContactInfo, loadContactInfo } from './actions';

import { getContactInfo } from '../moveReducers';

const validate = validateFunc(
  [
    {
      field: 'name',
      validator: 'isRequired',
      message: 'Required'
    },
    {
      field: 'phoneNumber',
      validator: 'isValidPhoneNumber',
      message: 'Invalid phone number'
    },
    {
      field: 'email',
      validator: 'isRequired',
      message: 'Required'
    },
    {
      field: 'email',
      validator: 'isValidEmail',
      message: 'Invalid email'
    }
  ],
  validators
);

const mapDispatchToProps = dispatch => ({
  loadContactInfo: () => dispatch(loadContactInfo())
});

const mapStateToProps = state => ({ contactInfo: getContactInfo(state) });


const notLoaded = props => {
  const isNotLoaded = isUndefined(props.contactInfo) || props.contactInfo.get('status') !== 'LOADED'
  return isNotLoaded
};

const enhance = compose(
  setStatic('label', 'Your contact Information'),
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.loadContactInfo();
    }
  }),
  branch(notLoaded, renderNothing),
  withProps(props => ({
    initialValues: props.contactInfo.get('detail')
  })),
  reduxForm({
    form: 'configurations.move.contactInfo',
    validate,
    onSubmit: (values) => {
      return localSaveContactInfo(values.toJS());
    },
    onSubmitSuccess: (result, dispatch, props) => {
      if (props.location.fromOverview) {
        return props.history.push({
          pathname: props.postEdit,
        });
      }
      // send user to next step
      props.history.push({
        pathname: props.next,
        state: props.location.state
      });
    }
  }),
  withProps(props => ({
    goBack: e => {
      e.preventDefault();
      props.history.push({
        pathname: props.previous,
        state: props.location.state
      });
    }
  })),
  scrollToTopOnMount
);

export default enhance(ContactInfo);
