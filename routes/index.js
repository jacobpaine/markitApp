'use strict';

const express = require('express');
const router = express.Router();

const api = require('./api');
const trade = require('./trade');
const stockpile = require('./stockpile');

router.use(api);
router.use(trade);
router.use(stockpile);

module.exports = router;
