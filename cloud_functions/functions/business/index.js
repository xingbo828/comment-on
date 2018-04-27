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

const getReview = (business) => {
  return {
    google: {
      url: "https://maps.google.com/?cid=10281119596374313554",
      rating: 4.5,
      reviews_count: 321
    },
    yelp: {
      url: "https://www.yelp.com/biz/gary-danko-san-francisco",
      rating: 3.2,
      reviews_count: 133
    }
  };
};

app.get('/:providerId/review', (request, response) => {
  const providerId = request.params.providerId;
  return admin.firestore().collection('providers').doc(providerId).get().then((doc) => {
    const data = doc.data();
    if (!data.review) {
      return getReview(data);
    }
    return data.review;
  }).then((review) => {
    return response.json(review);
  });

});

module.exports = () => {
  return {
    providers: functions.https.onRequest(app)
  };
};
