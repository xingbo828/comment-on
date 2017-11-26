import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import queryString from 'query-string';
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
      try {
        const parsedSearch = queryString.parse(this.props.location.search);
        const { configuration={} } = parsedSearch;
        // const configurationDecoded = atob(configuration);
        this.props.searchBusiness(configuration);
      } catch(err) {
        throw err;
      }
    }
  }),
  branch(
    isLoading,
    renderComponent(Spin.FullScreenSpinner)
  ),
  mapImmutablePropsToPlainProps,
  scrollToTopOnMount
)(SearchResult);
