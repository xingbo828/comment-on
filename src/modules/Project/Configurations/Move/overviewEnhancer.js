import { compose, withProps } from 'recompose';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  addProject
} from '../../projectAction';

import {
  getLocalstorageStepInfo,
  deleteStepInfo
} from '../../../Common/Configurations/Move/Overview/actions';
import isLoggedIn from '../../../Common/isLoggedIn';
import isCompletedProfile from '../../../Common/isCompletedProfile';
import { PROJECT_TYPES } from '../../../../constants';
import overViewAction from './overviewAction';

const mapDispatchToProps = dispatch => ({
  addProject: (type, config) => dispatch(addProject(type, config)),
});

const enhance = compose(
  withRouter,
  isLoggedIn,
  isCompletedProfile,
  connect(null, mapDispatchToProps),
  withProps(props => ({
    handleSubmit: async e => {
      e.preventDefault();
      const config = await getLocalstorageStepInfo();
      const projectId = await props.addProject(PROJECT_TYPES.MOVE, config);
      await deleteStepInfo();
      props.history.push({
        pathname: `/projects/configurations/success`,
        state: {
          projectId: projectId
        }
      });
    },
    signIn: e => {
      e.preventDefault();
      props.history.push({
        pathname: '/login',
        search: `?redirect=${props.location.pathname}${props.location.search}`
      });
    },
    goBack: e => {
      e.preventDefault();
      props.history.push({
        pathname: props.previous,
        state: props.location.state
      });
    },
    formAction: overViewAction
  }))
);

export default enhance;
