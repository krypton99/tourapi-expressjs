const tourRouter = require('./tour');

const route = function (app) {
    app.use('/api/tours', tourRouter);
};

module.exports = route;
