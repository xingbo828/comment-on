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
    return messageCollectionRef.where('conversation', '==', conversation).where('status', '==', 'UNREAD').onSnapshot((result) => {
      const filtered = result.docs.map(d => d.data()).filter(t=>t.from.id !== myUid);
      const unread = filtered.length;
      dispatch({
        type: NOTIFICATION_CENTER__UPDATE,
        project: projectwithConversations.project,
        conversation: conversation.id,
        unread
      });
    });
  });
};
