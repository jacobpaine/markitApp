'use strict';
// Require request for http requests.
const request = require('request');
// stockquote is the model upon which data is organized (i.e. the model)
const Stock = require('../models/stockquote');
// This method ( module.exports.getStocks ) is a GET from routes/stockpile.js called from a view ()
module.exports.getStocks = (req, res) => {
  //When pulling from the database, use the name of the model (Stock) this code line 5, plus find() with an empty obj {} inside. Then .exec the call. Log doc to see what it is. Then render stocks:doc on to the views/stockpile.jade
  Stock.find({}).exec((err, doc) => {
    console.log("doc", doc);
    res.render('stockpile', {
      stocks:doc
    });
  });
};


