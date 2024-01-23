const Tour = require('../models/Tours');

class TourController {
    //[GET] api/tours/
    getTours(req, res, next) {
        Tour.getAll('', req.query.top, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || 'Some err occured',
                });
            } else res.json(data);
        });
    }

    //[GET] api/tours/:id
    getTourById(req, res, next) {
        Tour.findById(req.params.id, (err, data) => {
            if (err) {
                res.status(500).send({
                    message:
                        err.message || 'Some err occured while get tour by id',
                });
            } else res.json(data);
        });
    }

    //[POST] api/tours
    create(req, res, next) {
        const tour = new Tour(req.body);

        Tour.create(tour, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || 'Some error occured while create',
                });
            } else res.json(data);
        });
    }

    //[PUT] api/tours/:id
    updateById(req, res, next) {
        const tour = new Tour(req.body);

        Tour.updateById(req.params.id, tour, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || 'Some error occured while update',
                });
            } else res.json(data);
        });
    }
}

module.exports = new TourController();
