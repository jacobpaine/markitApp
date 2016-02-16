'use strict';

const express = require('express');
const router = express.Router();

router.get('/api', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.send({hello: 'world'});
});

