import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderNothing, withProps } from 'recompose';
import { getProject } from '../projectActions';
import { getMoverProjectSummary } from '../projectReducers';
import scrollToTopOnMount from '../../../Common/scrollToTopOnMount';
import mapImmutablePropsToPlainProps from '../../../Common/mapImmutablePropsToPlainProps';
import MoverProjectSummary from './Summary';


const mapStateToProps = state => ({
  summary: getMoverProjectSummary(state),
});

const mapDispatchToProps = dispatch => ({
  getProject: (projectId) => dispatch(getProject(projectId))
});

const isLoading = props => {
  const status  = props.summary.get('status');
  return (status === 'UNINIT' || status === 'PENDING');
};

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      const projectId = this.props.match.params.projectId;
      this.props.getProject(projectId);
    }
  }),
  branch(isLoading, renderNothing),

  withProps(props => ({
    handleReply: async e => {
      e.preventDefault();
      debugger;
    },
    handleDecline: e => {
      e.preventDefault();
      debugger;
    }
  })),
  mapImmutablePropsToPlainProps,
  scrollToTopOnMount
);

export default enhance(MoverProjectSummary);
