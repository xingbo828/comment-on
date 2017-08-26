import { auth, storage, database } from '../../firebaseClient';
import { updateUserBusiness } from '../Account/accountAction';

const businessDbRef = database.ref().child('businesses');
const imgStorageRef = storage.ref();


export const SEARCH_BUSINESS = 'SEARCH_BUSINESS';

export const searchBusiness = (origin, destination, dateTime) => (dispatch) => {
  const API = `https://us-central1-comment-on-85597.cloudfunctions.net/business?origin=${origin}&destination=${destination}`;
  return fetch(API)
  .then(res => res.json())
  .then((business) => {
    return dispatch({
      type: SEARCH_BUSINESS,
      data: business
    });
  });
}


// export const UPDATE_BUSINESS_PROFILE = 'UPDATE_BUSINESS_PROFILE';

export const addBusiness = (businessInfo) => (dispatch) => {
  businessInfo = businessInfo.toJS();
  const uid = auth.currentUser.uid;
  businessInfo.businessOwners = {};
  businessInfo.businessOwners[uid] = true;
  const businessId = businessDbRef.push().key;

  return updateUserBusiness(businessId, uid)
  .then(() => updateBusiness(businessInfo, businessId));
}

const updateBusiness = (businessInfo, businessId) => {
  businessInfo = (businessInfo.toJS && businessInfo.toJS()) || businessInfo;
  businessInfo.businessServiceArea = reduceServiceArea(businessInfo.businessServiceArea);
  const businessRef = businessDbRef.child(businessId);
  return uploadBusinessImgs(businessInfo.businessImgs, businessId)
  .then((imgUrls) => {
    businessInfo.businessImgs = imgUrls;
    return businessRef.set(businessInfo);
  });
}

const reduceServiceArea = (serviceAreas) => {
  return serviceAreas && serviceAreas.reduce((result, serviceArea) => {
    result[serviceArea] = true;
    return result;
  }, {})
}

const uploadBusinessImgs = (businessImgs, businessId) => {
  if (Array.isArray(businessImgs) && businessImgs.length) {
    const storagePromises = businessImgs.map(img => {
      if (typeof img === 'string') {
        return Promise.resolve(img);
      }
      const imgRef = imgStorageRef.child(`images/business/${businessId}/${img.name}`);
      return imgRef.put(img)
      .then((result) => {
        return result.downloadURL;
      });
    });
    return Promise.all(storagePromises);
  }
  return Promise.resolve([]);
}
