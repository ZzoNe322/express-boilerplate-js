const express = require('express');
const getRoot = require('./get-root.handler');
const postRoot = require('./post-root.handler');

const router = express.Router();

router.get('/', getRoot);
router.post('/', postRoot);

module.exports = router;
