'use strict';
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyDJjuf5Cli-bjDPh_lWLhPoSqy7UPCr0xM',
    Promise: Promise
});
const express = require('express');
const moment = require('moment');
const cors = require('cors')({origin: true});

admin.initializeApp(functions.config().firebase);

const app = express();

app.use(cors);

app.get('/', (request, response) => {
    businesses(request, response);
});

app.get('/:id', (request, response) => {
    business(request, response);
});

exports.business = functions.https.onRequest(app);

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

const filterByCity = (city) => (business) => {
    if (!city) {
        return true;
    }
    return business.businessServiceArea[city]
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

const businessFilters = (parameters) => {
  const filters = [filterByCity(parameters.destinationCity),
    filterByCity(parameters.originCity),
    filterByDateTime(parameters.dateTime),
    filterByVehicle(parameters.vehicle)];

  return (business) => {
    return filters.every((filter) => filter(business));
  };
}

const business = ((request, response) => {
  const id = request.params.id;
  if (!id) {
    return response.json({});
  }
  admin.database().ref('/businesses/' + id)
    .once('value')
    .then((value)=> {
      console.log(value.val());
      value = value.val() || {};
      value.id = id;
      value.price = determinePrice();
      return response.json(value);
    });
});

const determinePrice = (dateTime, vehicle, buisness) => {
  const price = 300 * (0.5 + Math.random());
  return Number(Math.round(price+'e2')+'e-2');
}

const businesses = ((request, response) => {
    const origin = request.query.origin;
    const destination = request.query.destination;
    const dateTime = request.query.dateTime;
    const vehicle = request.query.vehicle;

    let originCity,destinationCity;

    console.log('here');
    if (!origin) {
        return response.status(200).json([]);
    }

    Promise.all([googleMapsClient.place({placeid: origin}).asPromise(),
        destination ? googleMapsClient.place({placeid: destination}).asPromise() : Promise.resolve()])
        .then((data) => {
            originCity = extractCity(data[0]);
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
                    result.price = determinePrice();
                    return result;
                });
            if (destinationCity || dateTime || vehicle) {
                const filters = businessFilters({
                  originCity: originCity,
                  destinationCity: destinationCity,
                  dateTime: dateTime,
                  vehicle: vehicle
                });
                businesses = businesses.filter((business) => {
                    return filters(business);
                });
            }

            response.json(businesses);
        })
});
