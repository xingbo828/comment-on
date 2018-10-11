import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import isUndefined from 'lodash/isUndefined';
import {
  compose,
  lifecycle,
  branch,
  withStateHandlers,
  renderNothing,
  setStatic
} from 'recompose';
import Overview from './Overview';
import scrollToTopOnMount from '../../../../Common/scrollToTopOnMount';
import mapImmutablePropsToPlainProps from '../../../../Common/mapImmutablePropsToPlainProps';

import {
  setAdditionalNotes,
  getAdditionalNotes
} from './actions';

import { getOverview } from '../moveReducers';

const mapDispatchToProps = dispatch => ({
  getAdditionalNotes: () => dispatch(getAdditionalNotes()),
  setAdditionalNotes: notes => dispatch(setAdditionalNotes(notes))
});

const mapStateToProps = state => ({
  overview: getOverview(state)
});

const notLoaded = props => {
  if (isUndefined(props.overview)) {
    return true;
  }
  if (props.overview.getIn(['notes', 'status']) !== 'LOADED') {
    return true;
  }
  return false;
};

const enhance = compose(
  setStatic('label', 'Overview'),
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle({
    componentDidMount() {
      const { getAdditionalNotes } = this.props;
      getAdditionalNotes();
    }
  }),
  branch(notLoaded, renderNothing),
  withStateHandlers(
    ({ configurations }) => ({
      configurationsValidationStatus: configurations
        .filter(d => d.toLowerCase() !== 'overview')
        .reduce((result, item) => {
          result[item] = false;
          return result;
        }, {})
    }),
    {
      setValidationStatus: ({ configurationsValidationStatus }) => (
        section,
        value
      ) => {
        configurationsValidationStatus[section] = value;
        return configurationsValidationStatus;
      }
    }
  ),
  mapImmutablePropsToPlainProps,
  scrollToTopOnMount
);

export default enhance(Overview);
