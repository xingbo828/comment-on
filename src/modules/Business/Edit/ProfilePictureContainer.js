import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderComponent } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import ProfilePicture from './ProfilePicture';
import { editBusinessImages, getBusinessInfo } from '../businessAction';
import Spinner from '../../../globalComponents/Spinner';

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
  branch(({doneLoading}) => !doneLoading, renderComponent(Spinner)),
  reduxForm({
    form: 'business.edit.profilePictures',
    onSubmit: (values, dispatch, props) => {
      return props.editBusinessImages(values, props.match.params.businessId);
    },
  })
);

export default enhance(ProfilePicture);
