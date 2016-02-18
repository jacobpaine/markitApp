'use strict';
// This code is essentially an index of routes. It's simply to keep the code minimal.
const express = require('express');
const router = express.Router();

const api = require('./api');
const trade = require('./trade');
const stockpile = require('./stockpile');

router.use(api);
router.use(trade);
router.use(stockpile);

module.exports = router;
