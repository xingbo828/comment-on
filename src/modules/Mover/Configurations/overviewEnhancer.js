import { compose, withProps } from 'recompose';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  addDirectProject
} from '../../Project/projectAction';

import {
  getLocalstorageStepInfo,
  deleteStepInfo
} from '../../Common/Configurations/Move/Overview/actions';

import { PROJECT_TYPES } from '../../../constants';
import overViewAction from './overviewAction';

const mapDispatchToProps = dispatch => ({
  addDirectProject: (type, config, moverId) => dispatch(addDirectProject(type, config, moverId)),
});

const enhance = compose(
  withRouter,
  connect(null, mapDispatchToProps),
  withProps(props => ({
    handleSubmit: async e => {
      e.preventDefault();
      const config = await getLocalstorageStepInfo();
      debugger;
      await props.addDirectProject(PROJECT_TYPES.MOVE, config, props.providerId);
      await deleteStepInfo();
      props.history.push({
        pathname: `/configuration/${props.slug}/success`
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
