import flatten from 'lodash/flatten';
import { auth, firestore } from '../../../firebaseClient';

const projectCollectionRef = firestore.collection('projects');
const messageCollectionRef = firestore.collection('messages');
const conversationCollectionRef = firestore.collection('conversations');


export const NOTIFICATION_CENTER__UPDATE = 'NOTIFICATION_CENTER__UPDATE';

export const subscribeToNotifications =  (myProjectIds) => async dispatch =>{
  const projectswithConversations = await _withConvos(myProjectIds)
  const unsubscribes = flatten(projectswithConversations.map( p => _subscribeToConversations(dispatch)(p)));

  const unsubscribeAll = fns => () => {
    fns.forEach(fn => fn());
  }
  return unsubscribeAll(unsubscribes);
};

const _withConvos = async (myProjectIds) => await Promise.all(myProjectIds.map(async (id) => {
    const convs = await conversationCollectionRef.where('project', '==', projectCollectionRef.doc(id)).get();
    return {
      project: id,
      conversations: convs.docs.map(d => d.ref)
    }
  }));


const _subscribeToConversations = (dispatch) => (projectwithConversations) => {
  const myUid = auth.currentUser.uid;
  return projectwithConversations.conversations.map((conversation) => {
    return messageCollectionRef.where('conversation', '==', conversation).where('status', '==', 'UNREAD').onSnapshot(async (result) => {
      const filteredMsgs = result.docs.map(d => Object.assign({id: d.id}, d.data())).filter(t=>t.from.id !== myUid);
      const resolvedFilterMsgs = await Promise.all(filteredMsgs.map(m => _resolveMsgDetail(m, projectwithConversations.project)));
      dispatch({
        type: NOTIFICATION_CENTER__UPDATE,
        project: projectwithConversations.project,
        conversation: conversation.id,
        messags: resolvedFilterMsgs
      });
    });
  });
};

const _resolveMsgDetail = async (msg, project) => {
  const senderDetail = await msg.from.get();
  const moverId = senderDetail.data().moverId;
  const moverDetail = await firestore.collection('providers').doc(moverId).get();
  return Object.assign({}, msg, {
    from: senderDetail.data(),
    provider: moverDetail.data(),
    project
  });
};
