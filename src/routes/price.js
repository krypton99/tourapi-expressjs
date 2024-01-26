const express = require('express');
const router = express.Router();

const priceController = require('../app/controllers/PriceController');

router.get('/:id', priceController.getPriceById);
router.get('/', priceController.getPrices);
router.post('/', priceController.create);
router.put('/:id', priceController.update);
router.delete('/:id', priceController.delete);

module.exports = router;
