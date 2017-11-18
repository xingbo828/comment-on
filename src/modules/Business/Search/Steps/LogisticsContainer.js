import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderComponent } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import LogisticsStep from './Logistics';
import scrollToTopOnMount from '../../../Common/scrollToTopOnMount';
import validators, { validateFunc } from '../../../Common/validators';
import Spin from '../../../../globalComponents/Spin';
import searchQueryValidator from '../../utils/searchQueryValidator';
import urlQueryConstructor from '../../../Common/urlQueryConstructor';
import message from '../../../../globalComponents/Message';

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
      const search = props.location.search;
      const params = new URLSearchParams(search);
      const { addresses, dateTime } = await getLocalStorageStepInfo();
      debugger;
      const searchParameters = urlQueryConstructor([
        {
          label: 'origin',
          value: addresses.from
        },
        {
          label: 'destination',
          value: addresses.to
        },
        {
          label: 'dateTime',
          value: `${dateTime.date},${dateTime.time}`
        }
      ]);

      const validator = searchQueryValidator(searchParameters);
      if (!validator.status) {
        message.error(validator.message);
        return false;
      }

      if (
        props.location.state &&
        props.location.state.fromProfile &&
        props.location.state.businessId
      ) {
        return props.history.push({
          pathname: `/business/profile/${props.location.state.businessId}`,
          search: searchParameters
        });
      }
      return props.history.push({
        pathname: '/business/search/result',
        search: searchParameters
      });
    }
  }),
  scrollToTopOnMount
);

export default enhance(LogisticsStep);
