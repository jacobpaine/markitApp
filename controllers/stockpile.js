'use strict';
// Require request for http requests
const request = require('request');
// stockquote is the model upon which data is organized (i.e. the model)
const Stock = require('../models/stockquote');
// This method ( module.exports.stockpile ) renders the partial( res.render('stockpile'); )
module.exports.stockpile = (req, res) => {
  res.render('stockpile');
};

module.exports.showStocks = (req, res) => {
  const stocks =
  res.render('stockpile');
};

module.exports.showStocks = (req, res) => {
  console.log("buyPost", req.body);
  const myStock = new Stock({
    name: req.body.name,
    symbol: req.body.sym,
    price: req.body.price,
    qty: req.body.qty
  });
