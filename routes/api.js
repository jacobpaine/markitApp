'use strict';

const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/quote');
// Although the name of this file is api.js, it is mostly unimportant. It is /quote that we need to find in the controller. The name 'api.js' is used in routes/index.js specifically for the router. MODULARITY!
router.get(`/quote`, ctrl.index);

router.post(`/quote`, ctrl.findstock);

module.exports = router;
