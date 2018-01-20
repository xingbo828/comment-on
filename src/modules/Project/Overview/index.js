import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderNothing, withProps} from 'recompose';
import isLoggedIn from '../../Common/isLoggedIn';
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
      this.props.getMyProjects(projectRefs);
    }
  })
);

export default enhance(Overview);
