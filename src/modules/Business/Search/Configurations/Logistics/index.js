import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderComponent, withProps } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import LogisticsStep from './Logistics';
import scrollToTopOnMount from '../../../../Common/scrollToTopOnMount';
import validators, { validateFunc } from '../../../../Common/validators';
import Spin from '../../../../../globalComponents/Spin';

import {
  localSaveLogistics,
  loadLogistics
} from '../../searchActions';

import { getLogistics } from '../../searchReducers';

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
  branch(isLoading, renderComponent(
    withProps({
      delay: 500
    })(Spin.FullScreenSpinner))),
  reduxForm({
    form: 'search.configurations.logistics',
    validate,
    onSubmit: (values, dispatch, props) => {
      return localSaveLogistics(values.toJS());
    },
    onSubmitSuccess: async (result, dispatch, props) => {
      props.history.push({
        pathname: '/business/search/configurations/items',
        state: props.location.state
      });
    }
  }),
  withProps((props)=> ({
    goBack: (e) => {
      e.preventDefault();
      props.history.push({
        pathname: '/business/search/configurations/date',
        state: props.location.state
      });
    }
  })),
  scrollToTopOnMount
);

export default enhance(LogisticsStep);
