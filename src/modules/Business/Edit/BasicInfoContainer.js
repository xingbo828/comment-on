import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderNothing } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import BasicInfo from './BasicInfo';
import { getBusinessInfo, updateBusiness } from '../businessAction';

const enhance = compose(
  withRouter,
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
            businessImgs: (businessInfo && businessInfo.businessImgs) ? Object.values(businessInfo.businessImgs) : [],
            businessHour: (businessInfo && businessInfo.businessHour) ? Object.values(businessInfo.businessHour) : [],
            businessServiceArea: (businessInfo && businessInfo.businessServiceArea) ? Object.keys(businessInfo.businessServiceArea) : [],
          }),
          doneLoading: true
        });
      })
    }
  }),
  branch(({doneLoading}) => !doneLoading, renderNothing),
  reduxForm({
    form: 'business.edit.basicInfo',
    onSubmit: (values, dispatch, props) => {
      return updateBusiness(values, props.match.params.businessId);
    }
  })
);

export default enhance(BasicInfo);
