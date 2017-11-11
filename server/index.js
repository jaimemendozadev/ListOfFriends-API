const express = require('express');
const app = express();
const Router = require('./Router');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const conn = require('./DB');


conn.on('error', console.error.bind(console, 'connection error:'));  

conn.once('open', () => {
 // Wait for the database connection to establish, then start the app.   
 console.log("We have a DB Connection!");                      
});



app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api', Router);


module.exports = app;