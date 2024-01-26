const Price = require('../models/Price');
const json = require('../../helper/json');

class PriceController {
    //[GET] api/price/
    getPrices(req, res, next) {
        Price.getAll(req.query.tourId, req.query.isPrimary).then((result) =>
            res.send(json(result)),
        );
    }

    //[GET] api/price/id
    getPriceById(req, res, next) {
        Price.getById(req.params.id)
            .then((result) => res.send(json(result)))
            .catch(next);
    }

    //[POST] api/price/
    create(req, res, next) {
        Price.create(req.body)
            .then((result) => res.send(json(result)))
            .catch(next);
    }

    //[DELETE] api/price/:id
    delete(req, res, next) {
        Price.delete(req.params.id)
            .then((result) => res.send(json(result)))
            .catch(next);
    }

    //[PUT] api/price/:id
    update(req, res, next) {
        Price.update(req.params.id, req.body)
            .then((result) => res.send(json(result)))
            .catch(next);
    }
}

module.exports = new PriceController();
