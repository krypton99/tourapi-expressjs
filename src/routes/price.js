const express = require('express');
const router = express.Router();

const priceController = require('../app/controllers/PriceController');

router.get('/', priceController.getPriceByTourId);

module.exports = router;
