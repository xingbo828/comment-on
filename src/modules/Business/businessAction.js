import { auth, storage, database } from '../../firebaseClient';
import { updateUserBusiness } from '../Account/accountAction';

const businessDbRef = database.ref().child('businesses');
const imgStorageRef = storage.ref();

export const UPDATE_BUSINESS_PROFILE = 'UPDATE_BUSINESS_PROFILE';

export const addBusiness = (businessInfo) => (dispatch) => {
  businessInfo = businessInfo.toJS();
  const uid = auth.currentUser.uid;
  businessInfo.businessOwners = {};
  businessInfo.businessOwners[uid] = true;
  const businessId = businessDbRef.push().key;
  console.log(businessInfo);

  return updateUserBusiness(businessId, uid)
  .then(() => {
    return dispatch(updateBusiness(businessInfo, businessId));
  });
}

export const updateBusiness = (businessInfo, businessId) => (dispatch) => {
  businessInfo = (businessInfo.toJS && businessInfo.toJS()) || businessInfo;
  businessInfo.businessServiceArea = reduceServiceArea(businessInfo.businessServiceArea);
  const businessRef = businessDbRef.child(businessId);
  return uploadBusinessImgs(businessInfo.businessImgs, businessId)
  .then((imgUrls) => {
    businessInfo.businessImgs = imgUrls;
    return businessRef.set(businessInfo);
  })
  .then(() => {
    dispatch({
      type: UPDATE_BUSINESS_PROFILE,
      data: businessInfo
    })
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
