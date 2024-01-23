const express = require('express');
const router = express.Router();

const imageRouter = require('../app/controllers/ImageController');

router.get('/', imageRouter.getByTourId);

module.exports = router;
