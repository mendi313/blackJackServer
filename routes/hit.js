const express = require('express');
const router = express.Router();

const { getCard } = require('../controolers/hit');

router.get('/', getCard);

module.exports = router;
