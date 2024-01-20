const connection = require('../../config/db');

// Constructor
const Tour = function (tour) {
    this.avatar_tour = tour.avatar_tour;
    this.code_tour = tour.code_tour;
    this.description = tour.description;
    this.discount_percent = tour.discount_percent;
    this.end_place = tour.end_place;
    this.name = tour.name;
    this.national = tour.national;
    this.end_time = tour.end_time;
    this.province = tour.province;
    this.start_place = tour.start_place;
    this.start_time = tour.start_time;
    this.status = tour.status;
    this.time = tour.time;
};

Tour.create = (newTour, result) => {
    connection.query('INSERT INTO tour SET ?', newTour, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
            return;
        }

        console.log('created tour: ', { id: res.insertId, ...newTour });
        result(null, { id: res.insertId, ...newTour });
    });
};

Tour.getAll = (name, result) => {
    let query = 'SELECT * FROM Tour';

    if (name) {
        query += ` WHERE name LIKE '%${name}%'`;
    }

    connection.query(query, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(null, err);
            return;
        }

        console.log('Tours: ', res);
        result(null, res);
    });
};

Tour.findById = (id, result) => {
    connection.query(`SELECT * FROM Tour WHERE id=${id}`, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(null, err);
            return;
        }

        if (res.length) {
            console.log('found Tour: ', res);
            result(null, res);
            return;
        }

        result({ kind: 'not_found' }, null);
    });
};

Tour.updateById = (id, tour, result) => {
    connection.query(
        `UPDATE Tour SET name = ?, 
    code_tour = ?, 
    description = ?,
    discount_percent = ?,
    avatar_tour = ?,
    end_time = ?,
    end_place = ?,
    start_time = ?,
    status = ?,
    time = ?,
    national = ?,
    province = ?
    WHERE id=${id}`,
        [
            tour.name,
            tour.code_tour,
            tour.description,
            tour.discount_percent,
            tour.avatar_tour,
            tour.end_time,
            tour.end_place,
            tour.start_time,
            tour.status,
            tour.time,
            tour.national,
            tour.province,
        ],
        (err, res) => {
            if (err) {
                console.log('error: ', err);
                result(err, null);
                return;
            }

            console.log('tour updated: ', { id, ...tour });
            result(null, { id, ...tour });
        },
    );
};

module.exports = Tour;
