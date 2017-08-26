import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import ProfilePictureCreation from './ProfilePictureCreation';
import { addBusinessImages } from '../businessAction';


const mapDispatchToProps = dispatch => ({
  addBusinessImages: profileImages => dispatch(addBusinessImages(profileImages))
});


const enhance = compose(
  withRouter,
  connect(null, mapDispatchToProps),
  reduxForm({
    form: 'business.creation.profilePicture',
    onSubmit: (values, dispatch, props) => {
      return props.addBusinessImages(values);
    },
  })
);

export default enhance(ProfilePictureCreation);
