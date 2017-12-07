import moment from 'moment';
import Immutable from 'immutable';

export const isRequired = value => !(typeof value === 'string' ? !value.trim() : !value);

// need more logic
export const isNotEmpty = value => {
  if(Array.isArray(value)) {
    return value.length > 0;
  }
  else if (Immutable.isImmutable(value) && Immutable.List.isList(value)) {
    return value.size;
  }
  return false;
}


export const isValidEmail = value => {
  const formattedValue = value ? value.trim() : '';
  if (formattedValue === '') {
    return true;
  }
  return !(formattedValue && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i.test(formattedValue));
};

export const isValidBirthDate = (date) => {
  const momentDate = moment(date, 'YYYY-MM-DD');
  const today = moment().startOf('day');
  const isInFuture = momentDate.isAfter(today);
  const isOlderThan110 = momentDate.isBefore(today.subtract(110, 'years'));
  return !isInFuture && !isOlderThan110;
};

export const isValidPhoneNumber = (value) => {
  let phoneNumber = typeof value === 'string' ? value : '';
  if (phoneNumber === '') {
    return true;
  }
  return /^\d{10}$/.test(
    phoneNumber.replace(/-|\s|\(|\)/g, '').replace(/^1/, '').trim()
  );
};

export const isValidPostalCode = (value) => {
  const formattedValue = value ? value.trim() : '';
  if (formattedValue === '') {
    return true;
  }
  return !(formattedValue && !/^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$/i.test(formattedValue));
};

// Specific validators
export const isValidAddressesInput = (value) => {
  const pickUpAddress = value.pickUpAddress || value.get('pickUpAddress');
  const deliveryAddress = value.deliveryAddress || value.get('deliveryAddress');
  return (pickUpAddress && deliveryAddress);
};

const validators = {
  isRequired,
  isValidEmail,
  isValidBirthDate,
  isNotEmpty,
  isValidPhoneNumber,
  isValidPostalCode,
  isValidAddressesInput
};
export default validators;

/*
ex:
  configs: [{
    field: 'businessEmail',
    validator: 'isValidEmail',
    message: 'Invalid business email'
  }]
*/
export const validateFunc = (configs, validators) => (values) => {
  return configs.reduce((currentErrors, config) => {
    if (!validators[config.validator](values.get(config.field))) {
      currentErrors[config.field] = config.message;
    }
    return currentErrors;
  }, {});
}

