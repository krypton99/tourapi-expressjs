const pool = require('../../config/db');

function Price(price) {
    this.price = price.price;
    this.is_primary = price.is_primary;
    this.type = price.type;
    this.tour_id = price.tour_id;
}

Price.getAll = (result) => {
    pool.query('SELECT * FROM price', (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(null, err);
            return;
        }

        console.log('Prices: ', res);
        result(null, res);
    });
};

Price.create = (newPrice, result) => {
    pool.query('INSERT INTO price SET ?', newPrice, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
            return;
        }

        console.log('created price: ', { id: res.insertId, ...newPrice });
        result(null, { id: res.insertId, ...newPrice });
    });
};

Price.getById = (id, result) => {
    pool.query(`SELECT * FROM price WHERE id=${id}`, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(null, err);
            return;
        }

        if (res.length) {
            console.log('found price: ', res[0]);
            result(null, res[0]);
            return;
        }

        result({ kind: 'not_found' }, null);
    });
};

Price.getByTourId = (tourId) => {
    return new Promise((resolve, reject) => {
        pool.query(
            `SELECT * FROM price WHERE tour_id=${tourId}`,
            (err, res) => {
                if (err) {
                    reject(err);
                } else resolve(res);
            },
        );
    });
};

module.exports = Price;
