import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderNothing } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import ProfilePicture from './ProfilePicture';
import { editBusinessImages, getBusinessInfo } from '../../moverAction';
import message from '../../../../globalComponents/Message';

const mapDispatchToProps = dispatch => ({
  editBusinessImages: (values, businessId) => dispatch(editBusinessImages(values, businessId))
});

const enhance = compose(
  withRouter,
  connect(null, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      const businessId = this.props.match.params.businessId;
      this.setState({
        doneLoading: false
      });
      getBusinessInfo(businessId)
      .then((businessInfo) => {
        this.setState({
          initialValues: Object.assign(businessInfo, {
            businessImgs: (businessInfo && businessInfo.businessImgs) ? Object.values(businessInfo.businessImgs) : []
          }),
          doneLoading: true
        });
      })
    }
  }),
  branch(({doneLoading}) => !doneLoading, renderNothing),
  reduxForm({
    form: 'mover.edit.profilePictures',
    onSubmit: (values, dispatch, props) => {
      return props.editBusinessImages(values, props.match.params.businessId);
    },
    onSubmitSuccess: () => {
      message.success('Profile pictures saved');
    }
  })
);

export default enhance(ProfilePicture);
