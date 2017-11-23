import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderComponent } from 'recompose';
import BusinessProfile from './BusinessProfile';
import { loadBusinessProfile } from './profileActions';
import { getProfile } from './profileReducers';
import mapImmutablePropsToPlainProps from '../../Common/mapImmutablePropsToPlainProps';
import Spin from '../../../globalComponents/Spin';

const mapDispatchToProps = dispatch => ({
  loadBusinessProfile: (businessId) => dispatch(loadBusinessProfile(businessId))
});

const mapStateToProps = (state, ownProps) => getProfile(state, ownProps.match.params.businessId)


const isLoading = (props) => (!props.profileState || props.profileState.get('status') !== 'LOADED');

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      const businessId = this.props.match.params.businessId;
      this.props.loadBusinessProfile(businessId);
    }
  }),
  branch(
    isLoading,
    renderComponent(Spin.FullScreenSpinner)
  ),
  mapImmutablePropsToPlainProps
);

export default enhance(BusinessProfile);