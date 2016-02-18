'use strict';

const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/stockpile');

// The first parameter is the destination of the info.
// On the destination, when there is a GET/POST do ctrl.whatever
router.get(`/stockpile`, ctrl.getStocks);

module.exports = router;

