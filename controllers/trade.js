'use strict';
// Stock is defined as the model, require that bad boy.
const Stock = require('../models/stockquote');
// When the router  (routes/trade.js) does a GET on the method .index, it renders views/index.jade
module.exports.index = (req, res) => {
  res.render('index');
};

//When the router (routes/trade.js) does a POST on the method .buy, it does everything below.
module.exports.buy = (req, res) => {
// Show me what the req.body looks like when I put a symbol in the input box and press buy. This req.body is the name, sym, price, qty, and dowhat from routes/quotedetails.jade, passed through the route, output at the console (here).
  console.log("buyPost", req.body);
// Create a new Stock obj (see line 3 of this code). Put all that output, you can see in line 12's console.log in an object called myStock.
  const myStock = new Stock({
    name: req.body.name,
    symbol: req.body.sym,
    price: req.body.price,
    qty: req.body.qty
  });
// Log the myStock that has been processed by the .buy method. Notice that the save below is WITHIN the buy.method.
  console.log("buymyStock", myStock);
// Save it to the database! Then render to the indexbuy.jade.
  myStock.save((err, savedStock) => {
    if (err) throw err;
// Show me that the stock saved on the console.
    console.log("savedStock", savedStock);
// Show me the saved stock on the DOM.
    res.render('indexbuy', {
      savedStockName: savedStock.name,
      savedStockSym: savedStock.symbol,
      savedStockPrice: savedStock.price,
      savedStockQty: savedStock.qty
    });
  });
};
