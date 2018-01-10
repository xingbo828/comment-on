import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderNothing } from 'recompose';
import { getProject } from '../projectActions';
import { getMoverProjectSummary } from '../projectReducers';
import scrollToTopOnMount from '../../../Common/scrollToTopOnMount';
import mapImmutablePropsToPlainProps from '../../../Common/mapImmutablePropsToPlainProps';
import MoverProjectSummary from './Summary';
import isLoggedIn from '../../../Common/isLoggedIn';
import message from '../../../../globalComponents/Message';

const mapStateToProps = (state, ownProps) => ({
  summary: getMoverProjectSummary(state, ownProps.user.moverId),
});

const mapDispatchToProps = dispatch => ({
  getProject: (projectId) => dispatch(getProject(projectId))
});

const isLoading = props => {
  const status  = props.summary.get('status');
  return (status === 'UNINIT' || status === 'PENDING');
};

const isProjectMissing = props => {
  const status  = props.summary.get('status');
  const isMissing = status === 'FAILED';
  if(isMissing) {
    message.error('Sorry, project can no longer be found.', 0);
  }
  return isMissing;
}

const enhance = compose(
  withRouter,
  isLoggedIn,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      const projectId = this.props.match.params.projectId;
      this.props.getProject(projectId);
    }
  }),
  branch(isLoading, renderNothing),
  // should send to 404
  branch(isProjectMissing, renderNothing),
  mapImmutablePropsToPlainProps,
  scrollToTopOnMount
);

export default enhance(MoverProjectSummary);
