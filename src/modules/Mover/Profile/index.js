import { withRouter } from 'react-router-dom';
import QueryString from 'query-string'
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderComponent } from 'recompose';
import MoverProfile from './MoverProfile';
import { getMoverWithId } from '../moverAction';
import { getProfile } from './profileReducers';
import mapImmutablePropsToPlainProps from '../../Common/mapImmutablePropsToPlainProps';
import Spin from '../../../globalComponents/Spin';
import scrollToTopOnMount from '../../Common/scrollToTopOnMount';
import {
  getMyProject
} from '../../Project/projectAction';
import {
  getMyProjectSelector
} from '../../Project/Management/managementReducer';

const mapDispatchToProps = dispatch => ({
  getMoverWithId: (moverId) => dispatch(getMoverWithId(moverId)),
  getMyProject: (projectId) => dispatch(getMyProject(projectId))
});

const mapStateToProps = (state, ownProps) => ({
  profile: getProfile(state).get('profile'),
  status: getProfile(state).get('status'),
  projectStatus: getMyProjectSelector(state, ownProps.match.params.project).get('status'),
  projectData: getMyProjectSelector(state, ownProps.match.params.project).get('projectData')
});

const isLoading = props => props.status !== 'LOADED';

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      const moverId = this.props.match.params.moverId;
      this.props.getMoverWithId(moverId);
      if(this.props.projectStatus !== 'LOADED') {
        const projectId = QueryString.parse(this.props.location.search).project;
        if (projectId) {
          this.props.getMyProject(projectId);
        }
      }
    }
  }),
  branch(
    isLoading,
    renderComponent(Spin.FullScreenSpinner)
  ),
  mapImmutablePropsToPlainProps,
  scrollToTopOnMount
);

export default enhance(MoverProfile);
