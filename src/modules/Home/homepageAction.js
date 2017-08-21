export const GET_BUSINESS_LIST = 'GET_BUSINESS_LIST';

export const getBusinessList = (current, destination) => (dispatch) => {
  const API = `https://us-central1-comment-on-85597.cloudfunctions.net/business?origin=${current.placeId}&destination=${destination.placeId}`;
  return fetch(API).then(res => {
    console.log(res);
    return dispatch({
      type: GET_BUSINESS_LIST,
      data: res
    });
  });
}
