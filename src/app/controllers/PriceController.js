const Price = require('../models/Price');
const json = require('../../helper/json');

class PriceController {
    //[GET] api/price/
    getPrices(req, res, next) {
        Price.getAll(req.query.tourId, req.query.isPrimary).then((result) =>
            res.send(json(result)),
        );
    }

    //[POST] api/price/
    create(req, res, next) {
        Price.create(req.body)
            .then((result) => res.send(json(result)))
            .catch(next);
    }
}

module.exports = new PriceController();
