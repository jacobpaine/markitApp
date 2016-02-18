'use strict';
// Express, a framework that helps with things manifold.
const express = require("express");
const app = express();
// Cool ascii faces is here as a part of the Heroku Tutorial. Unnecessary for the markIt app.. Useful for testing Heroku, or even local functionality. Just put in your localhost + PORT + /cool, e.g. http://localhost:5000/cool
const cool = require('cool-ascii-faces');
// When information is received from a server, it has a myriad of extra data (headers), body-parser strips these off. Oh-la-la, body-parser.
const bodyParser = require('body-parser');
// In this app, Mongoose interacts with MongoDB by creating more organized Schemas. Sort of the opposite of what Mongo was intended for, but useful nevertheless.
const mongoose = require('mongoose');
// ~? Why routes?
const routes = require('./routes/');
const PORT = process.env.PORT || 5000; // eslint-disable-line no-magic-numbers

// ~? The next two lines are part of the Heroku tutorial. They set the port and the public folder. The port setting may be redundant.
app.set(PORT, (process.env.PORT || 5000)); // eslint-disable-line no-magic-numbers
app.use(express.static(__dirname + '/public'));
// Variables used to align MongoDB to Heroku. See your settings in Heroku. Make sure you set the USER and PASS inside heroku.
const MONGODB_HOST = process.env.MONGODB_HOST || 'localhost';
const MONGODB_PORT = process.env.MONGODB_PORT || 27017; // eslint-disable-line no-magic-numbers
const MONGODB_USER = process.env.MONGODB_USER || '';
const MONGODB_PASS = process.env.MONGODB_PASS || '';
const MONGODB_NAME = process.env.MONGODB_NAME || 'markitapp';
// Below is a variable used in the MONGODB_URL variable, just for clarity. Right...
const MONGODB_URL_PREFIX = MONGODB_USER
  ? `${MONGODB_USER}:${MONGODB_PASS}@`
  : '';
// MONGODB_URL, the thing we pass through mongoose to hook up MongoDB.
const MONGODB_URL = `mongodb://${MONGODB_URL_PREFIX}${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_NAME}`;
// In views, we're going to use jade.
app.set('view engine', 'jade');
//app.locals.title places a title (located on the tab in Chrome) on the app.
app.locals.title = 'markIt App';
// ~? urlencoded is challenging. If extended is set to false, body-parser returns an object with strings and arrays. If extended is set to true, it can return any type. Cthulu fhtagn!.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Renders the view, views/index.jade, when root ('/') is looked for in the browser.
app.get('/', (req, res) => {
  res.render(`index`);
});
// Executes cool-ascii-faces when /cool is looked for the browser. ͡☜(⌒▽⌒)☞
app.get('/cool', (req, res) => {
  res.send(cool());
});
// ~? The server will use routes??
app.use(routes);
// Mongoose begins listening on PORT. Logs to console.
mongoose.connect(MONGODB_URL);
mongoose.connection.on('open', () => {
  app.listen(PORT, () => {
    console.log(`Node.js server started. Listening on port ${PORT}`);
  });
});
