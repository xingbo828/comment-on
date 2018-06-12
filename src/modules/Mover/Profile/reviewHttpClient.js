import createHttpClient from '../../../HttpClient';
import { auth } from '../../../firebaseClient';
import memoize from "lodash/memoize";

const createReviewHttpClient = async () => {
  const myToken = await auth.currentUser.getIdToken(true);
  const reviewHttpClient = createHttpClient();
  reviewHttpClient.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${myToken}`;

  const getReview = (providerId) => reviewHttpClient.get(`/providers/${providerId}/review`);

  return {
    getReview
  };
};

export default memoize(createReviewHttpClient);
