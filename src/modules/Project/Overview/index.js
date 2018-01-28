import { connect } from 'react-redux';
import { compose, lifecycle, withProps} from 'recompose';
import isLoggedIn from '../../Common/isLoggedIn';
import scrollToTopOnMount from '../../Common/scrollToTopOnMount';
import {
  getMyProjects
} from '../projectAction';
import {
  getMyProjectsSelector
} from './overviewReducer';
import Overview from './Overview';

const mapStateToProps = (state) =>  ({
  myProjectsData: getMyProjectsSelector(state).get('myProjectsData'),
  status: getMyProjectsSelector(state).get('status'),
});

const mapDispatchToProps = dispatch => ({
  getMyProjects: (projectRefs) => dispatch(getMyProjects(projectRefs))
});

const enhance = compose(
  isLoggedIn,
  connect(mapStateToProps, mapDispatchToProps),
  withProps(props => ({
    navToProject: (projectId) => {
      props.history.push({
        pathname: `/projects/${projectId}`
      });
    }
  })),
  lifecycle({
    componentDidMount() {
      const {user: { projects }} = this.props;
      const projectRefs = Object.values(projects)
      if(this.props.status === 'UNINIT') {
        this.props.getMyProjects(projectRefs);
      }
    }
  }),
  scrollToTopOnMount
);

export default enhance(Overview);
