import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import ProfilePicture from './ProfilePicture';
import { editBusinessImages, getBusinessInfo } from '../businessAction';

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
          initialValues: {
            businessLogo: businessInfo.logo,
            businessImgs: businessInfo.businessImgs ? Object.values(businessInfo.businessImgs) : []
          },
          doneLoading: true
        });
      })
    }
  }),
  reduxForm({
    form: 'business.edit.profilePictures',
    onSubmit: (values, dispatch, props) => {
      return props.editBusinessImages(values, props.match.params.businessId);
    },
  })
);

export default enhance(ProfilePicture);
