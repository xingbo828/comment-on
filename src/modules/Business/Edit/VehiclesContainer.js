import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderNothing } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import Vehicles from './Vehicles';
import { getBusinessInfo, updateVehiclesInfo } from '../businessAction';
import message from '../../../globalComponents/Message';

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
            vehiclesInfo: (businessInfo && businessInfo.vehiclesInfo) ? businessInfo.vehiclesInfo : {},
          }),
          doneLoading: true
        });
      })
    }
  }),
  branch(({doneLoading}) => !doneLoading, renderNothing),
  reduxForm({
    form: 'business.edit.vehicles',
    onSubmit: (values, dispatch, props) => {
      return updateVehiclesInfo(values, props.match.params.businessId);
    },
    onSubmitSuccess: () => {
      message.success('Vehicles information saved');
    }
  })
);

export default enhance(Vehicles);
