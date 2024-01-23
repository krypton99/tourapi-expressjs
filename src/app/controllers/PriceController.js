const Price = require('../models/Price');

class PriceController {
    //[GET] api/price/
    getPrices(req, res, next) {
        Price.getAll((err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || 'Some err occured',
                });
            } else res.json(data);
        });
    }

    //[GET] api/price/?tourId=
    getPriceByTourId(req, res, next) {
        Price.getByTourId(req.query.tourId)
            .then((price) => res.json(price))
            .catch(next);
    }
}

module.exports = new PriceController();
