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
