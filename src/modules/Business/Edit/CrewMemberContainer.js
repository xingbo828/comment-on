import { withRouter } from 'react-router-dom';
import { compose, lifecycle, branch, renderNothing, withProps } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import CrewMember from './CrewMember';
import { getBusinessInfo, updateBusinessCrewMember } from '../businessAction';
import message from '../../../globalComponents/Message';

const wrappedUpdateBusiness = businessId => (members) => {
  updateBusinessCrewMember(members, businessId).then(() => {
    message.success('Crew member updated.');
  });
};

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
            crewMembers: (businessInfo && businessInfo.crewMembers) ? Object.values(businessInfo.crewMembers) : [],
          }),
          doneLoading: true
        });
      })
    }
  }),
  branch(({doneLoading}) => !doneLoading, renderNothing),
  withProps(props => ({
    ...props,
    updateBusiness: wrappedUpdateBusiness(props.match.params.businessId)
  })),
  reduxForm({
    form: 'business.edit.crewMembers'
  })
);

export default enhance(CrewMember);
