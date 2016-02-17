'use strict';
// Require request for http requests
const request = require('request');
// stockquote is the model upon which data is organized (i.e. the model)
const Stock = require('../models/stockquote');

// From the route (api.js), this index method renders quote.jade
module.exports.index = (req, res) => {
  res.render('quote');
};

module.exports.findstock = (req, res) => {
// From jade, the req is pulling whatever was placed in the input field (quote.jade line 10).
  const symbol = req.body.sym;
// Find correct API URL to get the correct JSON. Read the docs.
  const url = `http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=${symbol}`;
  request.get(url, (err, response, body) => {
    if (err) throw err;
// Parse the body into a JSON to be used later objects.
    const thing = JSON.parse(body);
// Oh look! An object! That is pulling Name, Symbol and LastPrice from the API and sticking it into the model as name, symbol, price.
    const myStock = new Stock({
      name: thing.Name,
      symbol: thing.Symbol,
      price: thing.LastPrice
    });
// Logs to check functionality.
    const stockName = thing.Name;
    console.log(stockName);
    console.log("myStock", myStock);

// Render puts the info onto quotedetails.jade, putting Name, Symbol and LastPrice into the jade using the matching name (e.g. name, symbol, price)
    res.render('quotedetails', {
      name: thing.Name,
      symbol: thing.Symbol,
      price: thing.LastPrice
    });
  });
};
