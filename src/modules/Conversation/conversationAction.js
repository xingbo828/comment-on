import { firebaseInstance, auth, firestore } from '../../firebaseClient';

const messageCollectionRef = firestore.collection('messages');
const conversationCollectionRef = firestore.collection('conversations');
const userCollectionRef = firestore.collection('users');

const MSG_STATUS__UNREAD = 'UNREAD';
const MSG_STATUS__READ = 'READ';

export const CONVERSATION__LOADED = 'CONVERSATION__LOADED';
export const CONVERSATION__INIT = 'CONVERSATION__INIT';
export const CONVERSATION__SEND_MESSAGE = 'CONVERSATION__SEND_MESSAGE';

export const sendMessage = (conversationId, message) => async dispatch => {
  const uid = auth.currentUser.uid;
  const conversationRef = conversationCollectionRef.doc(conversationId);
  const messageWithOwner = Object.assign(
    { from: userCollectionRef.doc(uid), timestamp: firebaseInstance.firestore.FieldValue.serverTimestamp(), conversation: conversationRef, status: MSG_STATUS__UNREAD },
    message
  );

  await messageCollectionRef.add(messageWithOwner);

  return dispatch({
    type: CONVERSATION__SEND_MESSAGE,
    data: messageWithOwner
  });
};


export const subscribeToMessages = (conversationId) => async dispatch => {
  dispatch({
    type: CONVERSATION__INIT
  });
  const unsubscribe = messageCollectionRef.where("conversation", "==", conversationCollectionRef.doc(conversationId)).orderBy('timestamp').onSnapshot(async (msgCollectionSnapShot) => {
    const unFilteredmessages = await Promise.all(msgCollectionSnapShot.docChanges.map(async change => {
      if(change.doc.metadata.hasPendingWrites) {
        return null;
      }
      const message = change.doc.data();
      const fromRef = await message.from.get();
      const fromUser = fromRef.data();
      return {
      id: change.doc.id,
      ...message,
      from: Object.assign({ uid: fromRef.id }, fromUser)
      }
    }));

    const messages = unFilteredmessages.filter(a=>a !== null);
    const me = auth.currentUser.uid;
    const messagesToMarkAsRead = messages.filter( m => m.from.uid !== me).map(n => n.id);
    _markMsgsAsRead(messagesToMarkAsRead);
    if(messages.length > 0) {
      dispatch({
        type: CONVERSATION__LOADED,
        data: messages
      });
    }
  });
  return unsubscribe;
};

// mark messages that are not sent by me read
const _markMsgsAsRead = async (messageIds) => {
  const batch = firestore.batch();
  messageIds.forEach(msgId => {
    const msgRef = messageCollectionRef.doc(msgId)
    batch.update(msgRef, { status: MSG_STATUS__READ});
  });
  return await batch.commit();
};
