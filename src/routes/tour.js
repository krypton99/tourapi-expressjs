const express = require('express');
const router = express.Router();

const tourController = require('../app/controllers/TourController');

router.get('/', tourController.getTours);

module.exports = router;
