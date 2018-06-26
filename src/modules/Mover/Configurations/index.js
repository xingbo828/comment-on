import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, lifecycle, branch, renderComponent } from 'recompose';

import { getMoverWithId } from '../moverAction';
import { getProfileStatus, getProfileData } from '../Profile/profileReducers';
import mapImmutablePropsToPlainProps from '../../Common/mapImmutablePropsToPlainProps';
import Spin from '../../../globalComponents/Spin';
import scrollToTopOnMount from '../../Common/scrollToTopOnMount';

import DynamicBuildConfigurations from './DynamicBuildConfigurations'

// addProject: (type, config) => dispatch(addProject(type, config)),



const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMoverWithId
    },
    dispatch
  );

const mapStateToProps = (state, ownProps) => ({
  profileData: getProfileData(state, ownProps.match.params.moverId),
  profileStatus: getProfileStatus(state, ownProps.match.params.moverId)
});

const isLoading = props => props.profileStatus !== 'LOADED';

const enhance = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle({
    componentDidMount() {
      const moverId = this.props.match.params.moverId;
      this.props.getMoverWithId(moverId);
    }
  }),
  branch(isLoading, renderComponent(Spin.FullScreenSpinner)),
  mapImmutablePropsToPlainProps,
  scrollToTopOnMount
);

export default enhance(DynamicBuildConfigurations);
