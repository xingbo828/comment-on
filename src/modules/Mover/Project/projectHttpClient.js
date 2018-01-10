import createHttpClient from '../../../HttpClient';
import { auth } from '../../../firebaseClient';
import memoize from "lodash/memoize";

const createProjectHttpClient = async () => {
  const myToken = await auth.currentUser.getIdToken(true);
  const projectHttpClient = createHttpClient();
  projectHttpClient.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${myToken}`;

  const replyToLead = (projectId, {
    estimatedPrice,
    notes
  }) => projectHttpClient.put(`/projects/${projectId}`, {
    estimatedPrice: estimatedPrice,
    action: 'accept'
  });

  const declineLead = projectId =>
    projectHttpClient.put(`/projects/${projectId}`, {
      action: 'reject'
    });

  return {
    replyToLead,
    declineLead
  };
};

export default memoize(createProjectHttpClient);
