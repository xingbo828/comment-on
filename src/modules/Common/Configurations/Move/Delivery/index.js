import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, setStatic, lifecycle, branch, renderNothing, withProps } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import LogisticsStep from './Delivery';
import scrollToTopOnMount from '../../../../Common/scrollToTopOnMount';
import validators, { validateFunc } from '../../../../Common/validators';
import isUndefined from 'lodash/isUndefined';

import {
  localSaveDelivery,
  loadDelivery
} from './actions';

import { getDelivery } from '../moveReducers';

const validate = validateFunc(
  [
    {
      field: 'residenceType',
      validator: 'isRequired',
      message: 'Required'
    },
    {
      field: 'deliveryAccess',
      validator: 'isRequired',
      message: 'Required'
    }
  ],
  validators
);

const mapDispatchToProps = dispatch => ({
  loadDelivery: () => dispatch(loadDelivery())
});

const mapStateToProps = state => ({
  delivery: getDelivery(state)
});


const notLoaded = props => {
  const isNotLoaded = isUndefined(props.delivery) || props.delivery.get('status') !== 'LOADED'
  return isNotLoaded
};

const enhance = compose(
  setStatic('label', 'Delivery'),
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.loadDelivery();
    }
  }),
  branch(notLoaded, renderNothing),
  withProps(props => ({
    initialValues: props.delivery.get('detail')
  })),
  reduxForm({
    form: 'configurations.move.delivery',
    validate,
    onSubmit: (values) => {
      return localSaveDelivery(values.toJS());
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

export default enhance(LogisticsStep);
