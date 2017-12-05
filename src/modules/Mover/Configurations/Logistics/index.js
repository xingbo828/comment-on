import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderNothing, withProps } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import LogisticsStep from './Logistics';
import scrollToTopOnMount from '../../../Common/scrollToTopOnMount';
import validators, { validateFunc } from '../../../Common/validators';

import {
  localSaveLogistics,
  loadLogistics
} from '../configurationActions';

import { getLogistics } from '../configurationReducers';

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
    },
    {
      field: 'ableToAssist',
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
  initialValues: getLogistics(state)
});

const isLoading = props => props.initialValues.get('status') !== 'LOADED';

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.loadLogistics();
    }
  }),
  branch(isLoading, renderNothing),
  reduxForm({
    form: 'mover.configurations.logistics',
    validate,
    onSubmit: (values, dispatch, props) => {
      return localSaveLogistics(values.toJS());
    },
    onSubmitSuccess: async (result, dispatch, props) => {
      if(props.location.fromOverview) {
        return props.history.push({
          pathname: '/mover/configurations/overview'
        });
      }
      props.history.push({
        pathname: '/mover/configurations/items',
        state: props.location.state
      });
    }
  }),
  withProps((props)=> ({
    goBack: (e) => {
      e.preventDefault();
      props.history.push({
        pathname: '/mover/configurations/date',
        state: props.location.state
      });
    }
  })),
  scrollToTopOnMount
);

export default enhance(LogisticsStep);
