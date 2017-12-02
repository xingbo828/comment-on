import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderNothing, withProps } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import ProfilePicture from './ProfilePicture';
import { getMover, updateProfilePictures } from '../../moverAction';
import { getProfile } from '../../Profile/profileReducers';
import message from '../../../../globalComponents/Message';
import scrollToTopOnMount from '../../../Common/scrollToTopOnMount';
import validators, { validateFunc } from '../../../Common/validators';


const validate = validateFunc(
  [
    {
      field: 'logo',
      validator: 'isRequired',
      message: 'Required'
    }
  ],
  validators
);


const mapDispatchToProps = dispatch => ({
  getMover: (moverId) => dispatch(getMover(moverId)),
  updateProfilePictures: (moverInfo, moverId) => dispatch(updateProfilePictures(moverInfo, moverId))
});

const mapStateToProps = state => ({
  initialValues: getProfile(state).get('profile'),
  status: getProfile(state).get('status')
});

const isLoading = props => props.status !== 'LOADED';

const goToNextStep = (props, step) => {
  props.history.push({
    pathname: `/mover/edit/${props.match.params.moverId}/${step}`,
  });
};

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
    validate,
    onSubmit: (values, dispatch, props) => {
      return props.updateProfilePictures(values.toJS(), props.match.params.moverId);
    },
    onSubmitSuccess: (values, dispatch, props) => {
      message.success('Profile images saved.');
      goToNextStep(props, 'crew-member');
    }
  }),
  withProps((props)=> ({
    handleSkip: (e) => {
      e.preventDefault();
      goToNextStep(props, 'crew-member');
    }
  })),
  scrollToTopOnMount
);

export default enhance(ProfilePicture);
