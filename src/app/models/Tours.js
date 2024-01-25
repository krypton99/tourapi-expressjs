const pool = require('../../config/db');
const Price = require('./Price');
const Image = require('./Image');

const prisma = require('../../prisma');

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

Tour.create = async (newTour, newPrice, newImage) => {
    const createOptions = {
        data: {
            ...newTour,
        },
    };

    if (newPrice) {
        createOptions.data.price = {
            create: {
                is_primary: parseInt(newPrice.isPrimary),
                price: parseInt(newPrice.price),
                type: newPrice.type,
            },
        };
    }
    if (newImage) {
        createOptions.data.image = {
            create: {
                image: newImage.image,
            },
        };
    }
    return await prisma.tour.create(createOptions);
};

Tour.getAll = async (name, top) => {
    let take = parseInt(top);
    take = typeof take === 'number' && take;
    const options = {
        where: {
            name: {
                contains: name,
            },
        },
        include: {
            price: {
                where: {
                    is_primary: 1,
                },
            },
            image: true,
        },
    };
    if (take) {
        options.take = take;
    }
    return await prisma.tour.findMany(options);
};

Tour.findById = async (id) => {
    const options = {
        where: {
            id,
        },
        include: {
            price: {
                where: {
                    is_primary: 1,
                },
            },
            image: true,
        },
    };
    return await prisma.tour.findUnique(options);
};

Tour.updateById = async (id, tour) => {
    const options = {
        where: {
            id,
        },
        data: {
            ...tour,
        },
    };
    return await prisma.tour.update(options);
};

module.exports = Tour;
