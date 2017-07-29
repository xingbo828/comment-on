import moment from 'moment';

export const isRequired = value => !(typeof value === 'string' ? !value.trim() : !value);

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

