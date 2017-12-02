import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderNothing } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import BasicInfo from './BasicInfo';
import { getMover, updateBasicInfo } from '../../moverAction';
import { getProfile } from '../../Profile/profileReducers';
import message from '../../../../globalComponents/Message';
import scrollToTopOnMount from '../../../Common/scrollToTopOnMount';


const mapDispatchToProps = dispatch => ({
  getMover: (moverId) => dispatch(getMover(moverId)),
  updateBasicInfo: (moverInfo, moverId) => dispatch(updateBasicInfo(moverInfo, moverId))
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
    form: 'mover.edit.basicInfo',
    onSubmit: (values, dispatch, props) => {
      return props.updateBasicInfo(values.toJS(), props.match.params.moverId);
    },
    onSubmitSuccess: (values, dispatch, props) => {
      message.success('Basic information saved.');
      props.history.push({
        pathname: `/mover/edit/${props.match.params.moverId}/profile-picture`,
      });
    }
  }),
  scrollToTopOnMount
);

export default enhance(BasicInfo);
