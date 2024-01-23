const tourRouter = require('./tour');
const priceRouter = require('./price');
const imageRouter = require('./image');

const route = function (app) {
    app.use('/api/tours', tourRouter);
    app.use('/api/prices', priceRouter);
    app.use('/api/images', imageRouter);
};

module.exports = route;
