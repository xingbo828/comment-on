import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderComponent } from 'recompose';
import MoverProfile from './MoverProfile';
import { getMover } from '../moverAction';
import { getProfile } from './profileReducers';
import mapImmutablePropsToPlainProps from '../../Common/mapImmutablePropsToPlainProps';
import Spin from '../../../globalComponents/Spin';
import scrollToTopOnMount from '../../Common/scrollToTopOnMount';

const mapDispatchToProps = dispatch => ({
  getMover: (moverId) => dispatch(getMover(moverId))
});

const mapStateToProps = state => ({
  profile: getProfile(state).get('profile'),
  status: getProfile(state).get('status')
});


const isLoading = props => props.status !== 'LOADED';

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      const moverId = this.props.match.params.moverId;
      this.props.getMover(moverId);
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
