const express = require('express');
const app = express();
const Router = require('./Router');
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api', Router);


module.exports = app;