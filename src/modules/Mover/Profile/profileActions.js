import createReviewHttpClient from './reviewHttpClient';

export const GET_REVIEW_PENDING = 'GET_REVIEW_PENDING';
export const GET_REVIEW_SUCCESS = 'GET_REVIEW_SUCCESS';
export const GET_REVIEW_FAIL = 'GET_REVIEW_FAIL';

export const getReview = providerId => async dispatch => {
  try {
    dispatch({
      type: GET_REVIEW_PENDING,
      provider: providerId
    });
    const reviewHttpClient = await createReviewHttpClient();
    const data = await reviewHttpClient.getReview(providerId);
    dispatch({
        type: GET_REVIEW_SUCCESS,
        provider: providerId,
        data
    });
  } catch (error) {
    dispatch({
      type: GET_REVIEW_FAIL,
      error
    });
  }
};
