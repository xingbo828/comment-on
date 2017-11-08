'use strict';

const bbb = require('./bbbSeedScript');
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

const supportedServiceArea = ['bc-burnaby', 'bc-vancouver', 'bc-richmond'];
const standardWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const shuffle = (array) => {
  array = array.slice(0);
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const pickRandomFromArray = (array, pickCount) => {
  return shuffle(array).slice(0, pickCount);
}

const randomizeServiceArea = () => {
  return pickRandomFromArray(supportedServiceArea, Math.floor(Math.random() * (supportedServiceArea.length) + 1))
  .reduce((result, area) => {
    result[area] = true;
    return result;
  }, {});
}

const randomizeBusinessHour = () => {
  return pickRandomFromArray(standardWeek, Math.floor(Math.random() * 3) + 4)
  .map((day) => {
    return {
      day: day,
      startTime: 8,
      endTime: 17
    }
  })
  .sort((a, b) => {
    return standardWeek.indexOf(a.day) - standardWeek.indexOf(b.day);
  });
}

const randomizeVehicleInfo = () => {
  return {
    large: Math.floor(Math.random() * 2),
    medium: Math.floor(Math.random() * 2),
    small: Math.floor(Math.random() * 2),
    xLarge: Math.floor(Math.random() * 2)
  }
}

bbb.fetch('https://www.bbb.org/mbc/accredited-business-directory/moving-and-storage-company/richmond-bc')
.then((listings) => {
  return listings.map((listing) => {
    listing.businessServiceArea = randomizeServiceArea();
    listing.businessHour = randomizeBusinessHour();
    listing.vehiclesInfo = randomizeVehicleInfo();
    return listing;
  });
})
.then((listings) => {

  Promise.all(listings.map((listing) => {
    return businessRef.push(listing)
  }))
  .then((success)=> {
    console.log(success);
    return;
  });
});
