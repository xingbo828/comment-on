import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderComponent } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import Items from './Items';
import scrollToTopOnMount from '../../../../Common/scrollToTopOnMount';
import validators, { validateFunc } from '../../../../Common/validators';
import Spin from '../../../../../globalComponents/Spin';

import {
  loadItems
} from '../../searchActions';

import { getItems } from '../../searchReducers';

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
  loadItems: () => dispatch(loadItems())
});

const mapStateToProps = state => ({
  initialValues: getItems(state)
});

const isLoading = props => props.initialValues.get('status') !== 'LOADED';

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.loadItems();
    }
  }),
  branch(isLoading, renderComponent(Spin.FullScreenSpinner)),
  reduxForm({
    form: 'search.configurations.items',
    validate,
    onSubmit: (values, dispatch, props) => {
      debugger
    },
    onSubmitSuccess: async (result, dispatch, props) => {
      // const search = props.location.search;
      // const params = new URLSearchParams(search);
      // const { addresses, dateTime } = await getLocalStorageStepInfo();
      // debugger;
      // const searchParameters = urlQueryConstructor([
      //   {
      //     label: 'origin',
      //     value: addresses.from
      //   },
      //   {
      //     label: 'destination',
      //     value: addresses.to
      //   },
      //   {
      //     label: 'dateTime',
      //     value: `${dateTime.date},${dateTime.time}`
      //   }
      // ]);

      // const validator = searchQueryValidator(searchParameters);
      // if (!validator.status) {
      //   message.error(validator.message);
      //   return false;
      // }

      // if (
      //   props.location.state &&
      //   props.location.state.fromProfile &&
      //   props.location.state.businessId
      // ) {
      //   return props.history.push({
      //     pathname: `/business/profile/${props.location.state.businessId}`,
      //     search: searchParameters
      //   });
      // }
      // return props.history.push({
      //   pathname: '/business/search/result',
      //   search: searchParameters
      // });
    }
  }),
  scrollToTopOnMount
);

export default enhance(Items);
