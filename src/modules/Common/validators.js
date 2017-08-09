import moment from 'moment';

export const isRequired = value => !(typeof value === 'string' ? !value.trim() : !value);

// need more logic
export const isValidBusinessHours = value => Array.isArray(value) ? value.length > 0 : false;

export const isValidEmail = value => {
  if (value === undefined) return false;

  const formattedValue = value ? value.trim() : '';
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
  return /^\d{10}$/.test(
    phoneNumber.replace(/-|\s|\(|\)/g, '').replace(/^1/, '').trim()
  );
};

