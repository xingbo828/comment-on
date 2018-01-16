import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderNothing } from 'recompose';
import Management from './Management';
import mapImmutablePropsToPlainProps from '../../Common/mapImmutablePropsToPlainProps';
import {
  getMyProject
} from '../projectAction';
import {
  getMyProjectSelector
} from './managementReducer';

const mapStateToProps = (state, ownProps) =>  ({
  projectData: getMyProjectSelector(state, ownProps.match.params.projectId).get('projectData'),
  status: getMyProjectSelector(state, ownProps.match.params.projectId).get('status'),
  selectedProvider: getMyProjectSelector(state, ownProps.match.params.projectId).get('selectedProvider'),
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
  mapImmutablePropsToPlainProps
);

export default enhance(Management);
