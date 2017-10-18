import { getBusinessInfo } from '../businessAction';

export const LOADED_PROFILE = 'LOADED_PROFILE';
export const LOADING_PROFILE = 'LOADING_PROFILE';


export const loadBusinessProfile = (businessId) => (dispatch) => {
  dispatch({
    type: LOADING_PROFILE,
    data: {
      key: businessId
    }
  });
  getBusinessInfo(businessId)
  .then((business) => {
    dispatch({
      type: LOADED_PROFILE,
      data: {
        key: businessId,
        profile: business
      }
    });
  });
}
