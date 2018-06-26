import { withRouter } from 'react-router-dom';
import { compose, withProps } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import AddressSearchBar from './AddressSearchBar';
import validators, { validateFunc } from '../../../Common/validators';
import { localSaveAddresses } from '../../../Common/Configurations/Move/Address/actions';

const validate = validateFunc(
  [
    {
      field: 'pickUpAddress',
      validator: 'isRequired',
      message: 'Required'
    },
    {
      field: 'deliveryAddress',
      validator: 'isRequired',
      message: 'Required'
    }
  ],
  validators
);

const enhance = compose(
  withRouter,
  withProps(props => ({
    navToSearch: () => {
      props.history.push({
        pathname: '/projects/configurations/move/address'
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
          pickUpAddress: Object.assign(
            {},
            rawAddresses.pickUpAddress.location,
            {
              formattedAddress:
                rawAddresses.pickUpAddress.gmaps.formatted_address
            }
          ),
          deliveryAddress: Object.assign(
            {},
            rawAddresses.deliveryAddress.location,
            {
              formattedAddress:
                rawAddresses.deliveryAddress.gmaps.formatted_address
            }
          )
        }
      };
      return localSaveAddresses(newAddress);
    },
    onSubmitSuccess: (result, dispatch, props) => {
      // send user to next step
      props.history.push({
        pathname: '/projects/configurations/move/date'
      });
    }
  })
);

export default enhance(AddressSearchBar);
