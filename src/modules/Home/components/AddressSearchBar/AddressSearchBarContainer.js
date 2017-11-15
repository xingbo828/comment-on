import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import AddressSearchBar from './AddressSearchBar';
import validators, { validateFunc } from '../../../Common/validators';
import {
  localSaveAddresses
} from '../../../Business/Search/searchActions';

const validate = validateFunc([{
  field: 'homeAddress',
  validator: 'isRequired',
  message: 'Required'
}, {
  field: 'destAddress',
  validator: 'isRequired',
  message: 'Required'
}] , validators);


const enhance = compose(
  withRouter,
  withProps(props => ({
    navToSearch: () => {
      props.history.push({
        pathname: '/business/search/steps/address'
      });
    }
  })),
  reduxForm({
    form: 'homepage',
    validate,
    onSubmit: (values, dispatch, props) => {
      const rawAddresses = values.toJS();
      const newAddress = {
        addresses: {
          from: {placeId: rawAddresses.homeAddress.placeId},
          to: {placeId: rawAddresses.destAddress.placeId}
        }
      };
      return localSaveAddresses(newAddress);
    },
    onSubmitSuccess: (result, dispatch, props) => {
      // send user to next step
      props.history.push({
        pathname: '/business/search/steps/vehicle'
      });
    }
  })
);

export default enhance(AddressSearchBar);
