const pool = require('../../config/db');

// Constructor
const Image = function (image) {
    (this.image = image.image),
        (this.post_id = image.post_id),
        (this.tour_id = image.tour_id);
};

Image.getByTourId = (tourId) => {
    return new Promise((resolve, reject) => {
        pool.query(
            `SELECT * FROM image WHERE tour_id=${tourId}`,
            (err, res) => {
                if (err) {
                    reject(err);
                } else resolve(res);
            },
        );
    });
};

module.exports = Image;
