import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import isNull from 'lodash/isNull';
import isUndefined from 'lodash/isUndefined';
import {
  compose,
  lifecycle,
  branch,
  renderNothing
} from 'recompose';
import Overview from './Overview';
import scrollToTopOnMount from '../../../../Common/scrollToTopOnMount';
import mapImmutablePropsToPlainProps from '../../../../Common/mapImmutablePropsToPlainProps';

import { setProjectName, getProjectName, setAdditionalNotes, getAdditionalNotes } from './actions'



import {
  getItems,
  getLogistics,
  getDate,
  getAddresses,
  getOverview
} from '../moveReducers';

const mapDispatchToProps = dispatch => ({

  getAdditionalNotes: () => dispatch(getAdditionalNotes()),
  setAdditionalNotes: (notes) => dispatch(setAdditionalNotes(notes)),
  getProjectName: () => dispatch(getProjectName()),
  setProjectName: (name) => dispatch(setProjectName(name)),
});

const mapStateToProps = state => ({
  overview: getOverview(state)
});



const notLoaded = props => {
  if(isUndefined(props.overview)) {
    return true;
  }
  if(props.overview.getIn(['projectName', 'status']) !== 'LOADED') {
    return true;
  }
  if(props.overview.getIn(['notes', 'status']) !== 'LOADED') {
    return true;
  }
  return false
};



const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      const {
        getAdditionalNotes,
        getProjectName
      } = this.props;
        getProjectName();
        getAdditionalNotes();
    }
  }),
  branch(notLoaded, renderNothing),
  mapImmutablePropsToPlainProps,
  scrollToTopOnMount
);

export default enhance(Overview);
