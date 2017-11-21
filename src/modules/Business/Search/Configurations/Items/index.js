import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderComponent } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import Items from './Items';
import scrollToTopOnMount from '../../../../Common/scrollToTopOnMount';
import validators, { validateFunc } from '../../../../Common/validators';
import Spin from '../../../../../globalComponents/Spin';

import {
  loadItems,
  localSaveItems,
  getLocalStorageStepInfo
} from '../../searchActions';

import { getItems } from '../../searchReducers';


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
    onSubmit: (values, dispatch, props) => {
      return localSaveItems(values.toJS());
    },
    onSubmitSuccess: async (result, dispatch, props) => {
      const config = await getLocalStorageStepInfo();
      const configInjson = JSON.stringify(config);
      const configBase64 = btoa(configInjson);
      const searchParameters = '?configuration=' + configBase64;

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

export default enhance(Items);
