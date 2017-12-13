import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderNothing, withProps } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import CrewMember from './CrewMember';
import { getMover, updateCrewMember } from '../../moverAction';
import { getProfile } from '../../Profile/profileReducers';
import message from '../../../../globalComponents/Message';
import scrollToTopOnMount from '../../../Common/scrollToTopOnMount';

const mapDispatchToProps = dispatch => ({
  getMover: () => dispatch(getMover()),
  updateCrewMember: (moverInfo) => dispatch(updateCrewMember(moverInfo))
});

const mapStateToProps = state => ({
  initialValues: getProfile(state).get('profile'),
  status: getProfile(state).get('status')
});

const goToNextStep = (props, step) => {
  props.history.push({
    pathname: `/mover/edit/${step}`,
  });
};

const isLoading = props => props.status !== 'LOADED';

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      if(this.props.status === 'UNINIT') {
        this.props.getMover();
      }
    }
  }),
  branch(isLoading, renderNothing),
  reduxForm({
    form: 'mover.edit.crewMember',
    onSubmit: (values, dispatch, props) => {
      return props.updateCrewMember(values.toJS());
    },
    onSubmitSuccess: (values, dispatch, props) => {
      message.success('Crew members saved.');
      goToNextStep(props, 'vehicles');
    }
  }),
  withProps((props)=> ({
    handleSkip: (e) => {
      e.preventDefault();
      goToNextStep(props, 'vehicles');
    }
  })),
  scrollToTopOnMount
);

export default enhance(CrewMember);
