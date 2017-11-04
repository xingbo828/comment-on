import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderComponent } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import LogisticsStep from './Logistics';
import scrollToTopOnMount from '../../../Common/scrollToTopOnMount';
import validators, { validateFunc } from '../../../Common/validators';
import Spin from '../../../../globalComponents/Spin';

import {
  localSaveLogistics,
  loadLogistics,
  getLocalStorageStepInfo
} from '../searchActions';

import { getLogistics } from '../searchReducers';

const validate = validateFunc(
  [
    {
      field: 'ableToAssist',
      validator: 'isRequired',
      message: 'Required'
    },
    {
      field: 'havePiano',
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
    },
    shouldComponentUpdate(nextProps) {
      const diffHavePiano =
        this.props.initialValues.get('havePiano') !==
        nextProps.initialValues.get('havePiano');
      const diffAbleToAssist =
        this.props.initialValues.get('ableToAssist') !==
        nextProps.initialValues.get('ableToAssist');
      return diffHavePiano || diffAbleToAssist;
    }
  }),
  branch(isLoading, renderComponent(Spin.FullScreenSpinner)),
  reduxForm({
    form: 'search.steps.logistics',
    validate,
    onSubmit: (values, dispatch, props) => {
      return localSaveLogistics(values.toJS());
    },
    onSubmitSuccess: async (result, dispatch, props) => {
      const {
        origin,
        destination,
        dateTime,
        vehicle
      } = await getLocalStorageStepInfo();
      const { date, time } = dateTime;
      props.history.push({
        pathname: '/business/search/result',
        search: `?origin=${origin}&destination=${destination}&datetime=${date},${time}`
      });
    }
  }),
  scrollToTopOnMount
);

export default enhance(LogisticsStep);
