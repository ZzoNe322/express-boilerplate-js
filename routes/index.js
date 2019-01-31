const express = require('express');
const getRoot = require('./get-root.handler');

const router = express.Router();

router.get('/', getRoot);

module.exports = router;