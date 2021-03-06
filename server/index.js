const express = require('express');
const app = express();
const Router = require('./Router');
const bodyParser = require('body-parser');
const conn = require('./DB');
const path = require('path');
const cors = require('cors');

conn.on('error', console.error.bind(console, 'connection error:'));  
conn.once('open', () => {
 console.log("We have a DB Connection!");                      
});


app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api', Router);


module.exports = app;