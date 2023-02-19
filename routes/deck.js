const express = require('express');
const router = express.Router();

const { getDeck } = require('../controolers/deck');

router.get('/', getDeck);

module.exports = router;
