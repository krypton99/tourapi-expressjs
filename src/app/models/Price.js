const pool = require('../../config/db');
const prisma = require('../../prisma');

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

Price.create = async (newPrice) => {
    const options = {
        data: {
            tour_id: parseInt(newPrice.tour_id),
            is_primary: parseInt(newPrice.is_primary),
            price: parseInt(newPrice.price),
            type: newPrice.type,
        },
    };
    return await prisma.price.create(options);
};

Price.getById = async (id) => {
    const options = {
        where: {
            id,
        },
    };
    return await prisma.price.findUnique(options);
};

Price.getAll = async (tourId, primary) => {
    primary = ['0', '1'].includes(primary) ? primary : undefined;
    const options = {};

    if (tourId) {
        options.where = {
            tour_id: tourId,
        };
    }

    if (typeof primary !== 'undefined') {
        options.where = {
            ...options.where,
            is_primary: parseInt(primary),
        };
    }
    console.log(options);
    return await prisma.price.findMany(options);
};

Price.delete = async (id) => {
    const options = {
        where: {
            id,
        },
    };
    return await prisma.price.delete(options);
};

Price.update = async (id, data) => {
    const options = {
        where: {
            id,
        },
        data: {
            ...data,
        },
    };
    return await prisma.price.update(options);
};

module.exports = Price;
