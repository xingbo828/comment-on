export const isProfileCompleted = (profile) => {
  return !!profile.get('email') && !!profile.get('phoneNumber');
};
