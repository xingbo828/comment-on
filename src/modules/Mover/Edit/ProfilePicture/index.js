import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderNothing } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import ProfilePicture from './ProfilePicture';
import { getMover, updateProfilePictures } from '../../moverAction';
import { getProfile } from '../../Profile/profileReducers';
import message from '../../../../globalComponents/Message';
import scrollToTopOnMount from '../../../Common/scrollToTopOnMount';

const mapDispatchToProps = dispatch => ({
  getMover: (moverId) => dispatch(getMover(moverId)),
  updateProfilePictures: (moverInfo, moverId) => dispatch(updateProfilePictures(moverInfo, moverId))
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
    form: 'mover.edit.profilePicture',
    onSubmit: (values, dispatch, props) => {
      return props.updateProfilePictures(values.toJS(), props.match.params.moverId);
    },
    onSubmitSuccess: (values, dispatch, props) => {
      message.success('Profile images saved.');
      props.history.push({
        pathname: `/mover/edit/${props.match.params.moverId}/crew-member`,
      });
    }
  }),
  scrollToTopOnMount
);

export default enhance(ProfilePicture);
