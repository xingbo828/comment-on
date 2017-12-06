import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderNothing, withProps } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import BasicInfo from './BasicInfo';
import { getMover, updateBasicInfo } from '../../moverAction';
import { getProfile } from '../../Profile/profileReducers';
import message from '../../../../globalComponents/Message';
import scrollToTopOnMount from '../../../Common/scrollToTopOnMount';
import validators, { validateFunc } from '../../../Common/validators';

const validate = validateFunc(
  [
    {
      field: 'businessName',
      validator: 'isRequired',
      message: 'Required'
    },
    {
      field: 'businessAddrCity',
      validator: 'isRequired',
      message: 'Required'
    },
    {
      field: 'businessAddrProv',
      validator: 'isRequired',
      message: 'Required'
    },
    {
      field: 'businessAddrPostalCode',
      validator: 'isRequired',
      message: 'Required'
    },
    {
      field: 'businessPhoneNumber',
      validator: 'isValidPhoneNumber',
      message: 'Invalid phone number'
    },
    {
      field: 'businessHour',
      validator: 'isNotEmpty',
      message: 'Invalid business hours'
    },
    {
      field: 'businessEmail',
      validator: 'isValidEmail',
      message: 'Invalid business email'
    },
    {
      field: 'businessServiceArea',
      validator: 'isNotEmpty',
      message: 'Business service area cannot be empty'
    }
  ],
  validators
);


const mapDispatchToProps = dispatch => ({
  getMover: (moverId) => dispatch(getMover(moverId)),
  updateBasicInfo: (moverInfo, moverId) => dispatch(updateBasicInfo(moverInfo, moverId))
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
    form: 'mover.edit.basicInfo',
    validate,
    onSubmit: (values, dispatch, props) => {
      return props.updateBasicInfo(values.toJS(), props.match.params.moverId);
    },
    onSubmitSuccess: (values, dispatch, props) => {
      message.success('Basic information saved.');
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

export default enhance(BasicInfo);
