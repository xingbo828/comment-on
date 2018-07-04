'use strict';

const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')({origin: true});
const admin = require('firebase-admin');
const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyDJjuf5Cli-bjDPh_lWLhPoSqy7UPCr0xM',
  Promise: Promise
});
const axios = require('axios');
const yelpInstance = axios.create({
  baseURL: 'https://api.yelp.com/v3/',
  headers: {'Authorization': 'Bearer w5Ac-Db5r7Vm0r9Ne4_f573HLMjTvmZR4gpmvoS_qbhgvvuFDOXFhA7qyEMQhEhuFrlRyhWiYpKD3owRXZ1jZBFmqnDx-eP0rVJEa8SWSdxnpV81wzrXdhZeSvbfWnYx'}
});

const _ = require('lodash');
const onProviderUpdate = require('./event_hooks/onUpdate');

const app = express();

app.use(cors);
app.use(bodyParser.json());

app.use((err, req, res, next) => {
  if (err) {
    res.status(400).send('Invalid Request data');
  } else {
    next();
  }
});


const getGoogleRating = (placeid) => {
  return googleMapsClient.place({placeid: placeid}).asPromise()
    .then((place) => {
      const url = _.get(place, 'json.result.url', '');
      const rating = _.get(place, 'json.result.rating', '');
      const name = _.get(place, 'json.result.name', '');
      return {
        type: 'google',
        url,
        rating,
        name,
        review_count: 0
      };
    }).catch(() => {
      return {type: 'google'};
    });
};

const getYelpRating = (businessid) => {
  return yelpInstance.get(`businesses/${businessid}`)
    .then(({data}) => {
      return {
        type: 'yelp',
        url: data.url || '',
        rating: data.rating || '',
        name: data.name || '',
        review_count: data.review_count || 0
      }

    }).catch(() => {
      return {type: 'yelp'};
    });
};

const getReview = (reviewInfo) => {
  const getReviews = [];

  if (reviewInfo.googleInfo) {
    getReviews.push(getGoogleRating(reviewInfo.googleInfo.id));
  }

  if (reviewInfo.yelpInfo) {
    getReviews.push(getYelpRating(reviewInfo.yelpInfo.id));
  }

  return Promise.all(getReviews)
    .then(((reviews) => {
      return reviews.reduce((result, review) => {
        result[review.type] = review;
        delete review.type;
        return result;
      }, {});
    }));
};

app.get('/:providerId/review', (request, response) => {
  const providerId = request.params.providerId;
  return admin.firestore().collection('providers').doc(providerId).get().then((doc) => {
    const data = doc.data();
    if (!data.review && data.reviewInfo) {
      return getReview(data.reviewInfo);
    }
    return data.review;
  }).then((review) => {
    return response.json(review);
  });
});

app.get('/yelp/search', (req, res) => {
  const location = req.query.location || 'Vancouver,BC';
  const term = req.query.term;
  yelpInstance.get('businesses/search', {
    params: {
      term,
      location
    }
  }).then(({data}) => {
    const result = data.businesses.map(business => {
      return {
        rating: business.rating,
        id: business.id,
        name: business.name,
        image_url: business.image_url,
        address: business.location.display_address.join(', ')
      };
    });
    return res.json(result);
  }).catch(error => {
    console.log(error);
    return res.json([]);
  });
});

module.exports = () => {
  return {
    providers: functions.https.onRequest(app),
    onProviderUpdate
  };
};
