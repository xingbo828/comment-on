import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderNothing, withProps } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import LogisticsStep from './Logistics';
import scrollToTopOnMount from '../../../../Common/scrollToTopOnMount';
import validators, { validateFunc } from '../../../../Common/validators';
import isUndefined from 'lodash/isUndefined';

import {
  localSaveLogistics,
  loadLogistics
} from './actions';

import { getLogistics } from '../moveReducers';

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
      field: 'deliveryAccess',
      validator: 'isRequired',
      message: 'Required'
    }
  ],
  validators
);

const mapDispatchToProps = dispatch => ({
  loadLogistics: () => dispatch(loadLogistics())
});

const mapStateToProps = state => ({
  logistics: getLogistics(state)
});


const notLoaded = props => {
  const isNotLoaded = isUndefined(props.logistics) || props.logistics.get('status') !== 'LOADED'
  return isNotLoaded
};

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.loadLogistics();
    }
  }),
  branch(notLoaded, renderNothing),
  withProps(props => ({
    initialValues: props.logistics.get('detail')
  })),
  reduxForm({
    form: 'configurations.move.logistics',
    validate,
    onSubmit: (values) => {
      return localSaveLogistics(values.toJS());
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
