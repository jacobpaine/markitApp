'use strict';
const express = require("express");
const app = express();
var cool = require('cool-ascii-faces');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

const routes = require('./routes/');
const PORT = process.env.PORT || 5000; // eslint-disable-line no-magic-numbers
//const PORT = process.env.PORT || 5000; // eslint-disable-line no-magic-numbers

//Heroku tutorial.
app.set(PORT, (process.env.PORT || 5000)); // eslint-disable-line no-magic-numbers
app.use(express.static(__dirname + '/public'));

// const MONGODB_HOST = process.env.MONGODB_HOST || 'localhost';
// const MONGODB_PORT = process.env.MONGODB_PORT || 27017;
// const MONGODB_USER = process.env.MONGODB_USER || '';
// const MONGODB_PASS = process.env.MONGODB_PASS || '';
// const MONGODB_NAME = process.env.MONGODB_NAME || 'node-webserver';

// const MONGODB_URL_PREFIX = MONGODB_USER
//   ? `${MONGODB_USER}:${MONGODB_PASS}@`
//   : '';

// const MONGODB_URL = `mongodb://${MONGODB_URL_PREFIX}${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_NAME}`;

app.set('view engine', 'jade');

app.locals.title = 'markIt App (from server.js)';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render(`index`);
});

app.get('/cool', function(req, res) {
  res.send(cool());
});

app.use(routes);

app.listen (PORT, () => {
  console.log("Server runs on " + PORT);
})
