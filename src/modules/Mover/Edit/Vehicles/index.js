import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderNothing } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import Vehicles from './Vehicles';
import { getMover, updateVehicles } from '../../moverAction';
import { getProfile } from '../../Profile/profileReducers';
import message from '../../../../globalComponents/Message';
import scrollToTopOnMount from '../../../Common/scrollToTopOnMount';

const mapDispatchToProps = dispatch => ({
  getMover: (moverId) => dispatch(getMover(moverId)),
  updateVehicles: (moverInfo, moverId) => dispatch(updateVehicles(moverInfo, moverId))
});

const mapStateToProps = state => ({
  initialValues: getProfile(state).get('profile'),
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
  branch(isLoading, renderNothing),

  reduxForm({
    form: 'mover.edit.vehicles',
    onSubmit: (values, dispatch, props) => {
      return props.updateVehicles(values.toJS(), props.match.params.moverId);
    },
    onSubmitSuccess: (values, dispatch, props) => {
      message.success('Vehicle information saved.');
      // props.history.push({
      //   pathname: `/mover/edit/${props.match.params.moverId}/crew-member`,
      // });
    }
  }),
  scrollToTopOnMount
);

export default enhance(Vehicles);
