import { firebaseInstance, auth, firestore } from '../../firebaseClient';

const conversationCollectionRef = firestore.collection('conversations');
const userCollectionRef = firestore.collection('users');

export const CONVERSATION__SEND_MESSAGE = 'CONVERSATION__SEND_MESSAGE';

export const CONVERSATION__OPEN = 'CONVERSATION__OPEN';

export const openConversation = (conversationId) => dispatch => {
  dispatch({
    type: CONVERSATION__OPEN,
    data: conversationId
  });
};

export const CONVERSATION__CLOSE = 'CONVERSATION__CLOSE';
export const closeConversation = () => dispatch => {
  dispatch({
    type: CONVERSATION__CLOSE
  });
};


export const startConversation = (message, projectId, providerId) => async dispatch => {
  const uid = auth.currentUser.uid;
  const messageWithOwner = Object.assign(
    {},
    message,
    { from: uid }
  );
  const conversationDocRef = conversationCollectionRef.doc();
  await conversationDocRef.set({
    project: projectId,
    provider: providerId
  });
  const messageCollectionRef = conversationDocRef.collection('messages');
  await messageCollectionRef.add(messageWithOwner);
  return dispatch({
    type: 'CONVERSATION__START',
    data: messageWithOwner
  });
};

export const sendMessage = (conversationId, message) => async dispatch => {
  const uid = auth.currentUser.uid;
  const messageWithOwner = Object.assign(
    { from: uid, timestamp: firebaseInstance.firestore.FieldValue.serverTimestamp() },
    message
  );
  const conversationDocRef = conversationCollectionRef.doc(conversationId);
  const messageCollectionRef = conversationDocRef.collection('messages');

  await messageCollectionRef.add(messageWithOwner);

  return dispatch({
    type: CONVERSATION__SEND_MESSAGE,
    data: messageWithOwner
  });
};

export const CONVERSATION__LOADED = 'CONVERSATION__LOADED';

export const subscribeToMessages = (conversationId) => async dispatch => {
  const messageCollectionRef = conversationCollectionRef.doc(conversationId).collection('messages');
  messageCollectionRef.orderBy('timestamp').onSnapshot(async (msgCollectionSnapShot) => {
    const unFilteredmessages = await Promise.all(msgCollectionSnapShot.docChanges.map(async change => {
      if(change.doc.metadata.hasPendingWrites) {
        return null;
      }
      const message = change.doc.data();
      const fromUid = message.from;
      const fromRef = await userCollectionRef.doc(fromUid).get();
      const fromUser = fromRef.data();
      return {
      id: change.doc.id,
      ...message,
      from: Object.assign({uid: fromUid}, fromUser)
      }
    }));

    const messages = unFilteredmessages.filter(a=>a !== null)
    if(messages.length > 0) {
      dispatch({
        type: CONVERSATION__LOADED,
        data: messages
      });
    }
  });
};
