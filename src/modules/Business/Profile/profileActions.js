import { getBusiness } from '../businessDB';

export const LOADED_PROFILE = 'LOADED_PROFILE';
export const LOADING_PROFILE = 'LOADING_PROFILE';


export const loadBusinessProfile = (businessId) => async (dispatch) => {
  dispatch({
    type: LOADING_PROFILE,
    data: {
      key: businessId
    }
  });
  const business = await getBusiness(businessId);
  return dispatch({
    type: LOADED_PROFILE,
    data: {
      key: businessId,
      profile: business
    }
  });
}
