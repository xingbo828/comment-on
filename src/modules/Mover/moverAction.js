/*
  TODO: Refactor business level actions into sub module actions
*/

import {
  auth,
  //storage,
  database } from '../../firebaseClient';
import { updateUserMoverRef } from '../Account/accountAction';

// const imgStorageRef = storage.ref();
const moverDbRef = database.ref().child('movers');


export const LOADING_MOVER_PROFILE = 'LOADING_MOVER_PROFILE';
export const LOADED_MOVER_PROFILE = 'LOADED_MOVER_PROFILE';

export const getMover = (moverId) => async (dispatch) => {
  dispatch({
    type: LOADING_MOVER_PROFILE,
    data: {
      key: moverId
    }
  });
  const moverRef = moverDbRef.child(moverId);
  const moverProfile =  await moverRef.once('value');
  dispatch({
    type: LOADED_MOVER_PROFILE,
    data: {
      key: moverId,
      profile: moverProfile.toJSON()
    }
  });
}

export const addMover = (moverInfo) => async (dispatch) => {
  try{
    moverInfo = moverInfo.toJS();
    const uid = auth.currentUser.uid;
    moverInfo.owner = uid;
    const moverId = moverDbRef.push().key;

    // Create mover
    const moverRef = moverDbRef.child(moverId);
    await moverRef.set(moverInfo);
    // Update user with mover id
    await updateUserMoverRef(moverId, uid)(dispatch);
    return moverInfo;
  } catch(err) {
    console.log(err);
  }
}

export const updateBasicInfo = () => async (dispatch) => {

  };

export const updateCrewMember = () => async (dispatch) => {

};

export const updateProfilePictures = () => async (dispatch) => {

};



export const updateVehicles = () => async (dispatch) => {

};


// export const editBusinessImages = (businessInfo, businessId) => (dispatch) => {
//   const businessInfoRaw = businessInfo.toJS();
//   const { logo, businessImgs } = businessInfoRaw;
//   const uploadBusinessImgsPromise = uploadBusinessImgs(businessImgs, businessId);
//   const uploadBusinessLogoPromise = uploadBusinessLogo(logo, businessId);
//   return Promise.all([uploadBusinessLogoPromise, uploadBusinessImgsPromise])
//   .then(([imgLogoUrl, imgProfileUrls]) => {
//     const businessRef = businessDbRef.child(businessId);
//     return businessRef.set(Object.assign({}, businessInfoRaw, {
//       logo: imgLogoUrl,
//       businessImgs: imgProfileUrls
//     }));
//   });
// }

// export const updateBusinessCrewMember = (crewMembers, businessId) => {
//   const crewMemberAvatarPromises = Promise.all(crewMembers.map(c => {
//     if (typeof c.avatar === 'string') {
//       return Promise.resolve(c.avatar);
//     }
//     const imgRef = imgStorageRef.child(`images/business/${businessId}/${c.avatar.name}`);
//     return imgRef.put(c.avatar)
//     .then((result) => result.downloadURL);
//   }));

//   const businessRef = businessDbRef.child(businessId);
//   const businessInfoPromise = businessRef.once('value').then(obj => obj.toJSON());

//   return Promise
//   .all([crewMemberAvatarPromises, businessInfoPromise])
//   .then(([crewMemberMemberImages, businessInfo]) => {
//     crewMembers = crewMembers.map((c, index) => {
//       c.avatar = crewMemberMemberImages[index];
//       return c;
//     });
//     return businessRef.set(Object.assign({}, businessInfo, {
//       crewMembers
//     }));
//   })
// }

// export const updateVehiclesInfo = (businessInfo, businessId) => {
//   const businessInfoRaw = businessInfo.toJS();
//   const { vehiclesInfo } = businessInfoRaw;
//   const businessRef = businessDbRef.child(businessId);
//   return businessRef.set(Object.assign({}, businessInfoRaw, {
//     vehiclesInfo
//   }));
// };

// export const updateBusiness = (businessInfo, businessId) => {
//   businessInfo = (businessInfo.toJS && businessInfo.toJS()) || businessInfo;
//   businessInfo.businessServiceArea = reduceServiceArea(businessInfo.businessServiceArea);
//   const businessRef = businessDbRef.child(businessId);
//   return businessRef.set(businessInfo);
// }

// const reduceServiceArea = (serviceAreas) => {
//   return serviceAreas && serviceAreas.reduce((result, serviceArea) => {
//     result[serviceArea] = true;
//     return result;
//   }, {})
// }


// const uploadBusinessLogo = (businessLogo, businessId) => {
//   if (typeof businessLogo === 'string') {
//     return Promise.resolve(businessLogo);
//   }
//   const imgRef = imgStorageRef.child(`images/business/${businessId}/${businessLogo.name}`);
//   return imgRef.put(businessLogo)
//   .then((result) => result.downloadURL);
// };


// const uploadBusinessImgs = (businessImgs, businessId) => {
//   if (Array.isArray(businessImgs) && businessImgs.length) {
//     const storagePromises = businessImgs.map(img => {
//       if (typeof img === 'string') {
//         return Promise.resolve(img);
//       }
//       const imgRef = imgStorageRef.child(`images/business/${businessId}/${img.name}`);
//       return imgRef.put(img)
//       .then((result) => {
//         return result.downloadURL;
//       });
//     });
//     return Promise.all(storagePromises);
//   }
//   return Promise.resolve([]);
// }
