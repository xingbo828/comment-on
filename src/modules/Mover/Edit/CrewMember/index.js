import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderNothing } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import CrewMember from './CrewMember';
import { getMover, updateCrewMember } from '../../moverAction';
import { getProfile } from '../../Profile/profileReducers';
import message from '../../../../globalComponents/Message';
import scrollToTopOnMount from '../../../Common/scrollToTopOnMount';

const mapDispatchToProps = dispatch => ({
  getMover: (moverId) => dispatch(getMover(moverId)),
  updateCrewMember: (moverInfo, moverId) => dispatch(updateCrewMember(moverInfo, moverId))
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
    form: 'mover.edit.crewMember',
    onSubmit: (values, dispatch, props) => {
      return props.updateCrewMember(values.toJS(), props.match.params.moverId);
    },
    onSubmitSuccess: () => {
      message.success('Crew members saved.');
    }
  }),
  scrollToTopOnMount
);

export default enhance(CrewMember);
