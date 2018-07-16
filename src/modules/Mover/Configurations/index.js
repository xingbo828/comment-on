import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, lifecycle, branch, renderComponent } from 'recompose';

import { getMoverWithSlug } from '../moverAction';
import { getProfileStatus, getProfileData } from '../Profile/profileReducers';
import mapImmutablePropsToPlainProps from '../../Common/mapImmutablePropsToPlainProps';
import Spin from '../../../globalComponents/Spin';
import scrollToTopOnMount from '../../Common/scrollToTopOnMount';

import DynamicBuildConfigurations from './DynamicBuildConfigurations'


const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMoverWithSlug
    },
    dispatch
  );

const mapStateToProps = (state, ownProps) => ({
  profileData: getProfileData(state, ownProps.match.params.slug),
  profileStatus: getProfileStatus(state, ownProps.match.params.slug)
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
      const slug = this.props.match.params.slug;
      this.props.getMoverWithSlug(slug);
    }
  }),
  branch(isLoading, renderComponent(Spin.FullScreenSpinner)),
  mapImmutablePropsToPlainProps,
  scrollToTopOnMount
);

export default enhance(DynamicBuildConfigurations);
