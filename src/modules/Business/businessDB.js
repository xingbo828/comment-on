import { database } from '../../firebaseClient';

const businessDbRef = database.ref().child('businesses');

export const getBusiness = async (businessId) => {
  const businessRef = businessDbRef.child(businessId);
  return await businessRef.once('value').then(obj => obj.toJSON());
}

export const addBusiness = async (businessInfo, userId) => {

};

export const updateBusiness = async (businessInfo, userId) => {

};

export const deleteBusiness = async (businessId) => {

};
