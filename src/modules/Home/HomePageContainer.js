import HomePage from './HomePage';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { getBusinessList } from './homepageAction';


const mapDispatchToProps = dispatch => ({
  getBusinessList: (current, destination) => dispatch(getBusinessList(current, destination))
});

const enhanced = compose(
  connect(null, mapDispatchToProps)
);

export default enhanced(HomePage);

