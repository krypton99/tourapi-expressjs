const Tour = require('../models/Tours');
const json = require('../../helper/json');

const prisma = require('../../prisma');

class TourController {
    //[GET] api/tours/
    getTours(req, res, next) {
        Tour.getAll(req.query.name, req.query.top)
            .then((data) => res.send(json(data)))
            .catch(next);
    }

    //[GET] api/tours/:id
    getTourById(req, res, next) {
        Tour.findById(req.params.id)
            .then((data) => {
                res.send(json(data));
            })
            .catch(next);
    }

    //[POST] api/tours
    create(req, res, next) {
        Tour.create(req.body.tour, req.body.price, req.body.image)
            .then((result) => {
                res.send(json(result));
            })
            .catch(next);
    }

    //[PUT] api/tours/:id
    updateById(req, res, next) {
        const tour = new Tour(req.body);

        Tour.updateById(req.params.id, tour)
            .then((result) => res.send(json()))
            .catch(next);
    }
}

module.exports = new TourController();
