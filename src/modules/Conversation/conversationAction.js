import { firebaseInstance, auth, firestore } from '../../firebaseClient';

const conversationCollectionRef = firestore.collection('conversations');
const userCollectionRef = firestore.collection('users');





// export const startConversation = (message, projectId, providerId) => async dispatch => {
  //   const uid = auth.currentUser.uid;
  //   const messageWithOwner = Object.assign(
    //     {},
    //     message,
    //     { from: uid }
    //   );
    //   const conversationDocRef = conversationCollectionRef.doc();
    //   await conversationDocRef.set({
      //     project: projectId,
      //     provider: providerId
      //   });
      //   const messageCollectionRef = conversationDocRef.collection('messages');
      //   await messageCollectionRef.add(messageWithOwner);
      //   return dispatch({
        //     type: 'CONVERSATION__START',
        //     data: messageWithOwner
        //   });
        // };

export const CONVERSATION__SEND_MESSAGE = 'CONVERSATION__SEND_MESSAGE';

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
export const CONVERSATION__INIT = 'CONVERSATION__INIT';
export const subscribeToMessages = (conversationId) => async dispatch => {
  dispatch({
    type: CONVERSATION__INIT
  });
  const messageCollectionRef = conversationCollectionRef.doc(conversationId).collection('messages');
  const unsubscribe = messageCollectionRef.orderBy('timestamp').onSnapshot(async (msgCollectionSnapShot) => {
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
  return unsubscribe;
};

