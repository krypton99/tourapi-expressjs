const Image = require('../models/Image');

class ImageController {
    //[GET] api/image/
    getByTourId(req, res, next) {
        Image.getByTourId(req.query.tourId)
            .then((image) => res.json(image))
            .catch(next);
    }
}

module.exports = new ImageController();
