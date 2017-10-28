import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderComponent } from 'recompose';
import SearchResult from './Result';
import scrollToTopOnMount from '../../../Common/scrollToTopOnMount';
import Spin from '../../../../globalComponents/Spin';
import mapImmutablePropsToPlainProps from '../../../Common/mapImmutablePropsToPlainProps';
import {
  searchBusiness
} from '../searchActions';

import {
  getSearchResult
} from '../searchReducers';


const isLoading = (props) => props.status !== 'LOADED';

const mapStateToProps = state => {
  const searchResult = getSearchResult(state);
  return {
    status: searchResult.get('status'),
    result: searchResult.get('result')
  };
};


const mapDispatchToProps = dispatch => ({
  searchBusiness: (query) => dispatch(searchBusiness(query))
});


export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      const search = this.props.location.search;
      const params = new URLSearchParams(search);
      this.props.searchBusiness({
        origin: params.get('origin'),
        destination: params.get('destination'),
        dateTime: params.get('dateTime'),
        vehicle: params.get('vehicle')
      });
    }
  }),
  branch(
    isLoading,
    renderComponent(Spin.FullScreenSpinner)
  ),
  mapImmutablePropsToPlainProps,
  scrollToTopOnMount
)(SearchResult);
