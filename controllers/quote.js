'use strict';
// Require request for http requests
const request = require('request');
// stockquote is the model upon which data is organized (?)
const Stock = require('../models/stockquote');

// From the route, this index method renders quote.jade
module.exports.index = (req, res) => {
  res.render('quote');
};

module.exports.findstock = (req, res) => {
  const symbol = req.body.sym;
  const url = `http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=${symbol}`;
  request.get(url, (err, response, body) => {
    if (err) throw err;

    const thing = JSON.parse(body);

    const myStock = new Stock({
      name: thing.Name,
      symbol: thing.Symbol,
      price: thing.LastPrice
    });

    console.log(myStock);
    const stockName = thing.Name;
    console.log(stockName);

    res.render('quotedetails', {
      sym: thing.Name
    });
  });
};
