
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import SearchBusiness from './SearchBusiness';
import { searchBusiness } from '../businessAction';
import { getSearchResult } from '../businessReducer';
import mapImmutablePropsToPlainProps from '../../Common/mapImmutablePropsToPlainProps';

const mapDispatchToProps = dispatch => ({
  searchBusiness: (origin, destination, dateTime) => dispatch(searchBusiness(origin, destination, dateTime))
});


const enhance = compose(
  withRouter,
  connect(getSearchResult, mapDispatchToProps),
  mapImmutablePropsToPlainProps
);

export default enhance(SearchBusiness);
