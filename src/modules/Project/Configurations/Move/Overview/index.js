import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import isNull from 'lodash/isNull';
import isUndefined from 'lodash/isUndefined';
import {
  compose,
  lifecycle,
  branch,
  renderNothing,
  withProps
} from 'recompose';
import Overview from './Overview';
import { PROJECT_TYPES } from '../../../../../constants';
import scrollToTopOnMount from '../../../../Common/scrollToTopOnMount';
import mapImmutablePropsToPlainProps from '../../../../Common/mapImmutablePropsToPlainProps';
import isLoggedIn from '../../../../Common/isLoggedIn';
import isCompletedProfile from '../../../../Common/isCompletedProfile';
import {
  loadItems,
  loadDate,
  loadLogistics,
  loadAddresses,
  setAdditionalNotes,
  setProjectName,
  getProjectName,
  getAdditionalNotes,
  getLocalstorageStepInfo,
  deleteStepInfo
} from '../moveActions';
import {
  addProject
} from '../../../projectAction';

import {
  getItems,
  getLogistics,
  getDate,
  getAddresses,
  getOverview
} from '../moveReducers';

const mapDispatchToProps = dispatch => ({
  loadAddresses: () => dispatch(loadAddresses()),
  loadDate: () => dispatch(loadDate()),
  loadLogistics: () => dispatch(loadLogistics()),
  loadItems: () => dispatch(loadItems()),
  getAdditionalNotes: () => dispatch(getAdditionalNotes()),
  setAdditionalNotes: (notes) => dispatch(setAdditionalNotes(notes)),
  getProjectName: () => dispatch(getProjectName()),
  setProjectName: (name) => dispatch(setProjectName(name)),
  addProject: (type, config) => dispatch(addProject(type, config)),
});

const mapStateToProps = state => ({
  addresses: getAddresses(state),
  date: getDate(state),
  logistics: getLogistics(state),
  items: getItems(state),
  projectName: getOverview(state).get('projectName'),
  additionalNotes: getOverview(state).get('additionalNotes')
});

const isLoading = props => {
  const {
    addresses,
    date,
    logistics,
    items
  } = props;
  return (
    addresses.get('status') !== 'LOADED' ||
    date.get('status') !== 'LOADED' ||
    logistics.get('status') !== 'LOADED' ||
    items.get('status') !== 'LOADED'
  );
}


const validators = ({
  addressesValidator: (addresses) => {
    if(
      isUndefined(addresses.pickUpAddress) ||
      isUndefined(addresses.deliveryAddress)
    ) {
      return false;
    }
    return true;
  },
  dateValidator: (date) => {
    if(
      isNull(date.pickUpDate)
    ) {
      return false;
    }
    return true;
  },
  logisticsValidator: (logistics) => {
    if(
      isUndefined(logistics.residenceType) ||
      isUndefined(logistics.deliveryAccess)
    ) {
      return false;
    }
    return true;
  }
});

const enhance = compose(
  withRouter,
  isLoggedIn,
  isCompletedProfile,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      const {
        loadAddresses,
        loadDate,
        loadLogistics,
        loadItems,
        getAdditionalNotes,
        getProjectName
      } = this.props;
        loadAddresses();
        loadDate();
        loadLogistics();
        loadItems();
        getAdditionalNotes();
        getProjectName();
    }
  }),
  branch(isLoading, renderNothing),
  withProps(props => ({
    validators,
    handleSubmit: async e => {
      e.preventDefault();
      const config = await getLocalstorageStepInfo();
      const projectId = await props.addProject(PROJECT_TYPES.MOVE, config);
      await deleteStepInfo();
      props.history.push({
        pathname: `/projects/configurations/success`,
        state: {
          projectId: projectId
        }
      });
    },
    signIn: e => {
      e.preventDefault();
      props.history.push({
        pathname: '/login',
        search: `?redirect=${props.location.pathname}${props.location.search}`
      });
    },
    goBack: e => {
      e.preventDefault();
      props.history.push({
        pathname: '/projects/configurations/move/items',
        state: props.location.state
      });
    }
  })),
  mapImmutablePropsToPlainProps,
  scrollToTopOnMount
);

export default enhance(Overview);
