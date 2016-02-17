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
// Save to the database! Then render to the indexbuy.jade.
  console.log("buymyStock", myStock);
  myStock.save((err, savedStock) => {
    if (err) throw err;
    console.log("savedStock", savedStock);
    res.render('indexbuy', {
      savedStockName: savedStock.name,
      savedStockSym: savedStock.symbol,
      savedStockPrice: savedStock.price,
      savedStockQty: savedStock.qty
    });
  });
};
