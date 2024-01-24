const Tour = require('../models/Tours');
const json = require('../../helper/json');

const prisma = require('../../prisma');

class TourController {
    //[GET] api/tours/
    getTours(req, res, next) {
        prisma.tour
            .findMany({
                include: {
                    price: {
                        where: {
                            is_primary: 1,
                        },
                    },
                    image: true,
                },
            })
            .then((data) => {
                res.send(json(data));
            })
            .catch(next);
    }

    //[GET] api/tours/:id
    getTourById(req, res, next) {
        prisma.tour
            .findUnique({
                where: {
                    id: req.params.id,
                },
            })
            .then((data) => {
                res.send(json(data));
            })
            .catch(next);
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
