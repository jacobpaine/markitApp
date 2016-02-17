'use strict';
// const request = require('request');
const Stock = require('../models/stockquote');

module.exports.index = (req, res) => {
  res.render('index');
};

module.exports.buy = (req, res) => {
  console.log("buyPost", req.body);
  const myStock = new Stock({
    name: req.body.name,
    symbol: req.body.sym,
    price: req.body.price,
    qty: req.body.qty
  });

  console.log("buymyStock", myStock);
  myStock.save((err, savedStock) => {
    if (err) throw err;
    console.log("savedStock", savedStock);
    res.render('index');
  });
};
