import { withRouter } from 'react-router-dom';
import QueryString from 'query-string';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, lifecycle, branch, renderComponent } from 'recompose';

import MoverProfile from './MoverProfile';
import { getMoverWithId } from '../moverAction';
import { getReview } from './profileActions';
import { getProfileStatus, getProfileData, getReviewStatus, getReviewData } from './profileReducers';
import mapImmutablePropsToPlainProps from '../../Common/mapImmutablePropsToPlainProps';
import Spin from '../../../globalComponents/Spin';
import scrollToTopOnMount from '../../Common/scrollToTopOnMount';
import { getMyProject } from '../../Project/projectAction';
import { getMyProjectSelector } from '../../Project/Management/managementReducer';

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMoverWithId,
      getMyProject,
      getReview
    },
    dispatch
  );

const mapStateToProps = (state, ownProps) => ({
  profileData: getProfileData(state, ownProps.match.params.moverId),
  profileStatus: getProfileStatus(state, ownProps.match.params.moverId),
  projectStatus: getMyProjectSelector(state, ownProps.match.params.project).get(
    'status'
  ),
  projectData: getMyProjectSelector(state, ownProps.match.params.project).get(
    'projectData'
  ),
  reviewStatus: getReviewStatus(state, ownProps.match.params.moverId),
  reviewData: getReviewData(state, ownProps.match.params.moverId)
});

const isLoading = props => { console.log('PROPS___', props); return props.profileStatus !== 'LOADED' };

const enhance = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle({
    componentDidMount() {
      const moverId = this.props.match.params.moverId;
      this.props.getMoverWithId(moverId);
      this.props.getReview(moverId);
      if (this.props.projectStatus !== 'LOADED') {
        const projectId = QueryString.parse(this.props.location.search).project;
        if (projectId) {
          this.props.getMyProject(projectId);
        }
      }
    }
  }),
  branch(isLoading, renderComponent(Spin.FullScreenSpinner)),
  mapImmutablePropsToPlainProps,
  scrollToTopOnMount
);

export default enhance(MoverProfile);
