import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderNothing, withProps } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import Vehicles from './Vehicles';
import { getMover, updateVehicles } from '../../moverAction';
import { getProfile } from '../../Profile/profileReducers';
import message from '../../../../globalComponents/Message';
import scrollToTopOnMount from '../../../Common/scrollToTopOnMount';

const mapDispatchToProps = dispatch => ({
  getMover: () => dispatch(getMover()),
  updateVehicles: (moverInfo) => dispatch(updateVehicles(moverInfo))
});

const mapStateToProps = state => ({
  initialValues: getProfile(state).get('profile'),
  status: getProfile(state).get('status')
});

const isLoading = props => props.status !== 'LOADED';

const goToNextStep = (props) => {
  props.history.push({
    pathname: `/mover/my-profile`,
  });
};

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
    form: 'mover.edit.vehicles',
    onSubmit: (values, dispatch, props) => {
      return props.updateVehicles(values.toJS());
    },
    onSubmitSuccess: (values, dispatch, props) => {
      message.success('Vehicle information saved.');
      goToNextStep(props);
    }
  }),
  withProps((props)=> ({
    handleSkip: (e) => {
      e.preventDefault();
      goToNextStep(props);
    }
  })),
  scrollToTopOnMount
);

export default enhance(Vehicles);
