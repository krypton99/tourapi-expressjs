const express = require('express');
const router = express.Router();

const tourController = require('../app/controllers/TourController');

router.get('/:id', tourController.getTourById);
router.put('/:id', tourController.updateById);
router.get('/', tourController.getTours);
router.post('/', tourController.create);

module.exports = router;
