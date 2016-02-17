'use strict';

const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/trade');

// The first parameter is the destination of the info.
// On slash ('/') when there is a GET/POST do ctrl.whatever
router.get(`/`, ctrl.index);
router.post(`/`, ctrl.buy);

module.exports = router;
