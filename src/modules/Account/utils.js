import {isImmutable} from 'immutable';

export const isProfileCompleted = (profile) => {
  return isImmutable(profile) && !!profile.get('email') && !!profile.get('phoneNumber');
};
