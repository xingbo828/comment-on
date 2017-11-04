'use strict';
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyDJjuf5Cli-bjDPh_lWLhPoSqy7UPCr0xM',
    Promise: Promise
});
const moment = require('moment');
const cors = require('cors')({origin: true});

admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.hellowWorld = functions.https.onRequest((request, response) => {
    response.send("hello~");
});

const extractCity = (placeData) => {
    const location = {};
    if (!placeData) {
        return;
    }
    placeData.json.result.address_components.some((addressComponent) => {
        if (addressComponent.types[1] === 'political') {
            if (addressComponent.types[0] === 'locality') {
                location.city = addressComponent.short_name.toLowerCase();
            } else if (addressComponent.types[0] === 'administrative_area_level_1') {
                location.province = addressComponent.short_name.toLowerCase();
            }
        }
        return location.city && location.province;
    });
    return `${location.province}-${location.city}`;
}

exports.business = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        business(request, response);
    });
})

const filterByDestination = (destinationCity) => (business) => {
    if (!destinationCity) {
        return true;
    }
    return business.businessServiceArea[destinationCity]
};

const filterByVehicle = (vehicle) => (business) => {
    if (!vehicle) {
        return true;
    }
    return business.vehiclesInfo[vehicle] !== 0;
}

const filterByDateTime = (dateTime) => {
  if (!dateTime) {
    return () => true;
  }
  const dateTimeArr = dateTime.split(',');
  const date = dateTimeArr.shift();
  const startHour = Number(dateTimeArr.shift());
  let endHour = Number(dateTimeArr.shift());

  if (isNaN(date) || isNaN(startHour)) {
    return () => false;
  }

  if (isNaN(endHour)) {
    endHour = startHour;
  }

  const dateTimeObj = moment(date, 'YYYYMMDD');
  const day = dateTimeObj.format('ddd').toLowerCase();

  return (business) => {
    return business.businessHour.some(businessHour => {
      return businessHour.day === day && businessHour.startTime <= endHour && businessHour.endTime >= startHour;
    });
  }
}

const business = ((request, response) => {
    const origin = request.query.origin;
    const destination = request.query.destination;
    const dateTime = request.query.dateTime;
    const vehicle = request.query.vehicle;

    let destinationCity;

    if (!origin) {
        return response.status(400).json({error: 'Empty origin'});
    }

    Promise.all([googleMapsClient.place({placeid: origin}).asPromise(),
        destination ? googleMapsClient.place({placeid: destination}).asPromise() : Promise.resolve()])
        .then((data) => {
            const originCity = extractCity(data[0]);
            destinationCity = extractCity(data[1]);
            return originCity;
        })
        .then((location) => {
            return admin.database().ref('/businesses')
                .orderByChild(`businessServiceArea/${location}`).equalTo(true)
                .once('value')
        })
        .then((value) => {
            const businessData = value.val();
            if (!businessData) {
                return response.json([]);
            }
            let businesses = Object.keys(businessData)
                .map((businessId) => {
                    const result = businessData[businessId];
                    result.id = businessId;
                    return result;
                });
            if (destinationCity || dateTime || vehicle) {
                const cityFilter = filterByDestination(destinationCity);
                const dateFilter = filterByDateTime(dateTime);
                const vehicleFilter = filterByVehicle(vehicle);
                businesses = businesses.filter((business) => {
                    return cityFilter(business) && dateFilter(business) && vehicleFilter(business);
                });
            }

            response.json(businesses);
        })

    // admin.database().ref('/businesses')
    //     .orderByChild('businessServiceArea/bc-vancouver').equalTo(true)
    //     .once('value').then((value) => {

    //         response.json(value.val());
    //     });
});
