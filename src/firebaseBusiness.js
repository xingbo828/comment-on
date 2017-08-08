const firebase = require('firebase');

const config = {
  apiKey: "AIzaSyD-_qTEnH7-6KSLKtCPHLgdodwBTS45xus",
  authDomain: "comment-on-85597.firebaseapp.com",
  databaseURL: "https://comment-on-85597.firebaseio.com",
  projectId: "comment-on-85597",
  storageBucket: "comment-on-85597.appspot.com",
  messagingSenderId: "177107431871"
};

const database = firebase.initializeApp(config).database();

const businessRef = database.ref().child('businesses');

const businessData = {
  name: 'Will\'s Moving Co.',
  description: 'Best moving service in Vancouver!',
  phone: '178939023922',
  serviceArea: ['Vancouver', 'Richmond'],
  images: [],
  owners: {'8u5DrSmUuIRWBT45CWy76njRrnV2': true, '7l4lkhyPOnWAAmlGotT5djKs0fX2': true},
  inquries: {},
  businessHour: [
    {
      'day': 'mon',
      'startTime': '1130',
      'endTime': '1830'
    }
  ]
};

const key = businessRef.push(businessData).key;
const usersRef = database.ref().child('users');

businessRef.child(key).once('value').then((data)=>{
  data = data.val();
  return Promise.all(Object.keys(data.owners).map((owner) => {
    return usersRef.child(owner).once('value')
    .then(ownerData => {
      return ownerData.val();
    });
  })).then((ownersData) => {
    data.owners = ownersData;
    return data;
  });
}).then((business) => {
  console.log(business);
});
