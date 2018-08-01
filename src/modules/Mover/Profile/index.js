import { withRouter } from 'react-router-dom';
import QueryString from 'query-string';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, lifecycle, branch, renderComponent } from 'recompose';

import MoverProfile from './MoverProfile';
import { getMoverWithSlug } from '../moverAction';
import { getReview } from './profileActions';
import { getProfileStatus, getProfileData, getReviewStatus, getReviewData } from './profileReducers';
import mapImmutablePropsToPlainProps from '../../Common/mapImmutablePropsToPlainProps';
import Spin from '../../../globalComponents/Spin';
import scrollToTopOnMount from '../../Common/scrollToTopOnMount';
import { getMyProject } from '../../Project/projectAction';
import { getMyProjectSelector } from '../../Project/Management/managementReducer';
import withErrorBoundary from '../../Common/withErrorBoundary';
import ErrorPage from '../../Common/ErrorPage';


const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMoverWithSlug,
      getMyProject,
      getReview
    },
    dispatch
  );

const mapStateToProps = (state, ownProps) => ({
  profileData: getProfileData(state, ownProps.match.params.slug),
  profileStatus: getProfileStatus(state, ownProps.match.params.slug),
  projectStatus: getMyProjectSelector(state, ownProps.match.params.project).get(
    'status'
  ),
  projectData: getMyProjectSelector(state, ownProps.match.params.project).get(
    'projectData'
  ),
  reviewStatus: getReviewStatus(state, ownProps.match.params.slug),
  reviewData: getReviewData(state, ownProps.match.params.slug)
});

const isLoading = props => props.profileStatus !== 'LOADED' ;

const enhance = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle({
    componentDidMount() {
      const slug = this.props.match.params.slug;
      this.props.getMoverWithSlug(slug);
      // this.props.getReview(moverId);
      if (this.props.projectStatus !== 'LOADED') {
        const projectId = QueryString.parse(this.props.location.search).project;
        if (projectId) {
          this.props.getMyProject(projectId);
        }
      }
    },
    componentWillReceiveProps(nextProps) {
      if(this.props.profileStatus !== 'LOADED' && nextProps.profileStatus === 'LOADED') {
        nextProps.getReview(nextProps.profileData.get('id'));
      }
    }
  }),
  branch(isLoading, renderComponent(Spin.FullScreenSpinner)),
  mapImmutablePropsToPlainProps,
  scrollToTopOnMount,
  withErrorBoundary(ErrorPage)
);

export default enhance(MoverProfile);
