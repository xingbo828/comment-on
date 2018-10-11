import { firebaseInstance, firestore } from '../../../firebaseClient';

const registrationCollectionRef = firestore.collection('registration');

export const submitRegistration = (name, company, email) => {
  return registrationCollectionRef.add({
    name,
    company,
    email,
    timestamp: firebaseInstance.firestore.FieldValue.serverTimestamp()
  });
}