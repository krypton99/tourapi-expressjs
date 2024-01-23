const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3001;
const bodyParser = require('body-parser');
const cors = require('cors');

var corsOptions = {
    origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));

const route = require('./routes');

// Using body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
