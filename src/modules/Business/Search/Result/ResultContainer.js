import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderComponent } from 'recompose';
import SearchResult from './Result';
import scrollToTopOnMount from '../../../Common/scrollToTopOnMount';
import Spin from '../../../../globalComponents/Spin';
import message from '../../../../globalComponents/Message';
import mapImmutablePropsToPlainProps from '../../../Common/mapImmutablePropsToPlainProps';
import {
  searchBusiness
} from '../searchActions';

import {
  getSearchResult
} from '../searchReducers';

import searchQueryValidator from '../../utils/searchQueryValidator';


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
      const validator = searchQueryValidator(search);
      if (!validator.status) {
        message.error(validator.message);
      }
      this.props.searchBusiness(search);
    }
  }),
  branch(
    isLoading,
    renderComponent(Spin.FullScreenSpinner)
  ),
  mapImmutablePropsToPlainProps,
  scrollToTopOnMount
)(SearchResult);
