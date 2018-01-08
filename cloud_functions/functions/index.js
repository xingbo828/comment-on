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

app.get('/:id', (request, response) => {
    business(request, response);
});

app.get('*', (request, response) => {
    businesses(request, response);
});

exports.business = functions.https.onRequest(app);

const leads = require('./lead')(app);
const users = require('./user');
const storage = require('./storage');

Object.assign(exports, leads, users, storage);

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
  const timeArr = dateTime.time.split(',');
  const date = dateTime.date;
  const startHour = Number(timeArr.shift());
  let endHour = Number(timeArr.shift());

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

const getUTCStartDateTime = (dateTime) => {
  const result = moment.utc(dateTime.date);
  const timeArr = dateTime.time.split(',');
  const startHour = Number(timeArr.shift());
  return result.add(startHour, 'h').unix();
};

const businessFilters = (parameters) => {
  const filters = [filterByCity(parameters.destinationCity),
    filterByCity(parameters.originCity),
    filterByDateTime(parameters.dateTime)];

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
    const configuration = request.query.configuration;
    if (!configuration) {
      return response.status(200).json([]);
    }
    const query = JSON.parse(Buffer.from(configuration, 'base64').toString());

    if (!query || !query.addresses) {
      return response.status(200).json([]);
    }

    const origin = query.addresses.pickUpAddress;
    const destination = query.addresses.deliveryAddress;
    const dateTime = query.dateTime;

    let originCity,destinationCity;

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
            const avgPrice = determinePrice();
            const businessData = value.val();
            if (!businessData) {
                return response.json([]);
            }
            let businesses = Object.keys(businessData)
                .map((businessId) => {
                    const result = businessData[businessId];
                    result.id = businessId;
                    result.price = avgPrice;
                    return result;
                });
            if (destinationCity || dateTime) {
                const filters = businessFilters({
                  originCity: originCity,
                  destinationCity: destinationCity,
                  dateTime: dateTime,
                });
                businesses = businesses.filter((business) => {
                    return filters(business);
                });
            }
            const promiseArr = businesses.map((business) => {
              return googleMapsClient.directions({
                origin: business.businessAddr1 + ',' + business.businessAddrCity + ',' + business.businessAddrProv,
                destination: 'place_id:' + origin,
                arrival_time: getUTCStartDateTime(dateTime)
              }).asPromise()
              .then((direction) => {
                business.travelTime = direction.json.routes[0].legs[0].duration.value;
                business.price += (business.travelTime/3600) * 100;
                business.price = Number(Math.round(business.price+'e2')+'e-2');
                return business;
              });
            });
            return Promise.all(promiseArr);
        }).then((businesses) => {
            console.log(businesses);
            return response.json(businesses);
        }).catch((err) => {
          console.log(err);
        });
});
