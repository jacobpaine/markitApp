'use strict';

const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/quote');
const api = require('./api', ctrl.index);
// const home = require('./home');

router.use(api);
// router.use(home);

module.exports = router;
