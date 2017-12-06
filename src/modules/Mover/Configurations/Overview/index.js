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
import scrollToTopOnMount from '../../../Common/scrollToTopOnMount';
import mapImmutablePropsToPlainProps from '../../../Common/mapImmutablePropsToPlainProps';
import {
  loadItems,
  loadDateTime,
  loadLogistics,
  loadAddresses,
  setAdditionalNotes,
  getAdditionalNotes
} from '../configurationActions';

import {
  getItems,
  getLogistics,
  getDateTime,
  getAddresses,
  getOverview
} from '../configurationReducers';

const mapDispatchToProps = dispatch => ({
  loadAddresses: () => dispatch(loadAddresses()),
  loadDateTime: () => dispatch(loadDateTime()),
  loadLogistics: () => dispatch(loadLogistics()),
  loadItems: () => dispatch(loadItems()),
  getAdditionalNotes: () => dispatch(getAdditionalNotes()),
  setAdditionalNotes: (notes) => dispatch(setAdditionalNotes(notes)),
});

const mapStateToProps = state => ({
  addresses: getAddresses(state),
  dateTime: getDateTime(state),
  logistics: getLogistics(state),
  items: getItems(state),
  additionalNotes: getOverview(state).get('additionalNotes')
});

const isLoading = props => {
  const {
    addresses,
    dateTime,
    logistics,
    items
  } = props;
  return (
    addresses.get('status') !== 'LOADED' ||
    dateTime.get('status') !== 'LOADED' ||
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
  dateTimeValidator: (dateTime) => {
    if(
      isNull(dateTime.pickUpDate) ||
      isNull(dateTime.pickUpTime) ||
      isNull(dateTime.deliveryDate)
    ) {
      return false;
    }
    return true;
  },
  logisticsValidator: (logistics) => {
    if(
      isUndefined(logistics.residenceType) ||
      isUndefined(logistics.deliveryAccess) ||
      isUndefined(logistics.ableToAssist)
    ) {
      return false;
    }
    return true;
  }
});

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      const {
        loadAddresses,
        loadDateTime,
        loadLogistics,
        loadItems,
        getAdditionalNotes
      } = this.props;
        loadAddresses();
        loadDateTime();
        loadLogistics();
        loadItems();
        getAdditionalNotes();
    }
  }),
  branch(isLoading, renderNothing),
  withProps(props => ({
    validators,
    handleSubmit: e => {
      e.preventDefault();
      // const config = await getLocalStorageStepInfo();
      // const configInjson = JSON.stringify(config);
      // const configBase64 = btoa(configInjson);
      // const searchParameters = '?configuration=' + configBase64;

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
    },
    goBack: e => {
      e.preventDefault();
      props.history.push({
        pathname: '/mover/configurations/items',
        state: props.location.state
      });
    }
  })),
  mapImmutablePropsToPlainProps,
  scrollToTopOnMount
);

export default enhance(Overview);
