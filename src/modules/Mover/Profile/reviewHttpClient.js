import createHttpClient from '../../../HttpClient';
import memoize from "lodash/memoize";

const createReviewHttpClient = () => {
  const reviewHttpClient = createHttpClient();

  const getReview = (providerId) => reviewHttpClient.get(`/providers/${providerId}/review`);

  return {
    getReview
  };
};

export default memoize(createReviewHttpClient);
