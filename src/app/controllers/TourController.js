const connection = require('../../config/db');

class TourController {
    //[GET] api/tours/
    getTours(req, res, next) {
        connection.query('SELECT * FROM TOUR', (err, rows, field) => {
            res.json(rows);
        });
    }
}

module.exports = new TourController();
