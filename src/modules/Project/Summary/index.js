import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderNothing } from 'recompose';
import Summary from './Summary';
import mapImmutablePropsToPlainProps from '../../Common/mapImmutablePropsToPlainProps';
import scrollToTopOnMount from '../../Common/scrollToTopOnMount';
import {
  getMyProject
} from '../projectAction';
import {
  getMyProjectSelector
} from '../Management/managementReducer';

const mapStateToProps = (state, ownProps) =>  ({
  projectData: getMyProjectSelector(state, ownProps.match.params.projectId).get('projectData'),
  status: getMyProjectSelector(state, ownProps.match.params.projectId).get('status')
});


const mapDispatchToProps = dispatch => ({
  getMyProject: (projectId) => dispatch(getMyProject(projectId))
});

const isLoading = props => (props.status === 'UNINIT' || props.status === 'PENDING');

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      if(this.props.status !== 'LOADED') {
        const projectId = this.props.match.params.projectId;
        this.props.getMyProject(projectId);
      }
    }
  }),
  branch(isLoading, renderNothing),
  mapImmutablePropsToPlainProps,
  scrollToTopOnMount
);

export default enhance(Summary);
