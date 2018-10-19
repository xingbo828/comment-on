import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, setStatic, lifecycle, branch, renderNothing, withProps } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import PickUpStep from './PickUp';
import scrollToTopOnMount from '../../../../Common/scrollToTopOnMount';
import validators, { validateFunc } from '../../../../Common/validators';
import isUndefined from 'lodash/isUndefined';

import {
  localSavePickUp,
  loadPickUp
} from './actions';

import { getPickUp } from '../moveReducers';

const validate = validateFunc(
  [
    {
      field: 'residenceType',
      validator: 'isRequired',
      message: 'Required'
    },
    {
      field: 'pickUpAccess',
      validator: 'isRequired',
      message: 'Required'
    },
    {
      field: 'pickUpParking',
      validator: 'isRequired',
      message: 'Required'
    },
    {
      field: 'pickUpJunkRemoval',
      validator: 'isRequired',
      message: 'Required'
    }
  ],
  validators
);

const mapDispatchToProps = dispatch => ({
  loadPickUp: () => dispatch(loadPickUp())
});

const mapStateToProps = state => ({
  pickUp: getPickUp(state)
});


const notLoaded = props => {
  const isNotLoaded = isUndefined(props.pickUp) || props.pickUp.get('status') !== 'LOADED'
  return isNotLoaded
};

const enhance = compose(
  setStatic('label', 'Pick up'),
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.loadPickUp();
    }
  }),
  branch(notLoaded, renderNothing),
  withProps(props => ({
    initialValues: props.pickUp.get('detail')
  })),
  reduxForm({
    form: 'configurations.move.pickUp',
    validate,
    onSubmit: (values) => {
      return localSavePickUp(values.toJS());
    },
    onSubmitSuccess: async (result, dispatch, props) => {
      if(props.location.fromOverview) {
        return props.history.push({
          pathname: props.postEdit,
        });
      }
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

export default enhance(PickUpStep);
